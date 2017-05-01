---
layout: markdown
title: Sourcegraph Master Plan
subtitle: What we're building and why it matters 
---

Today, Sourcegraph gives you the power of an IDE (jump-to-def, search, and find-references) when reading code on the web, either on <a href="/index">Sourcegraph.com</a>, or on GitHub with the <a target="blank" href="https://text.sourcegraph.com/the-sourcegraph-test-v0-9-12-more-steps-to-better-code-e5c281850c">Sourcegraph for GitHub Chrome extension</a>.

<div class="content-block">What most people don&#39;t know is that our long-term vision is to make it so everyone, in every community, in every country, and in every industry&#151;not just the ones working at the half-dozen dominant tech companies&#151;can create products using the best technology. We believe this is the only way the world will sustain broad economic growth and build the innovations we need over the next 100 years in transportation, health care, energy, AI, communication, space travel, etc.</div>

In 1976, just 0.2% of the world&#39;s population had access to a computer. Apple&#39;s vision then was to create a &quot;bicycle for the mind&quot; in the form of a computer, and Microsoft put a computer &quot;on every desk and in every home.&quot; Together, these companies succeeded in bringing computing to billions of people. But these billions of people are still using software applications built by just 0.2% of the world&#39;s population (those who can code).

The next step is to make it so billions of people, not just 0.2% of the world population, can build software (not just use it). Amazon Web Services and others solve the distribution piece: a tiny team can reach millions of users using the same infrastructure available to the most advanced tech companies. But the process of creating software is stuck in the mainframe era: the &quot;developer experience&quot; of building software is still poor, duplicative, manual, and single-player—and every software project is about integrating components of variable quality developed mostly in isolation, with a high chance of failure.

At Sourcegraph, we want to fix this and eventually enable everyone to build software. For now, we&#39;re revealing our master plan for phase 1: how we&#39;re going to make it easier and faster for today&#39;s developers to build software.
In short, phase 1 is:

* Make basic code intelligence ubiquitous
* Make code review continuous & intelligent
* Increase the amount & quality of open-source code

When phase 1 is almost done, we&#39;ll reveal phase 2: how we&#39;ll work toward enabling everyone to code. If you think that&#39;s crazy, ask yourself: now that billions of people have access to the Internet, is coding more like reading and writing (which virtually everyone does) or publishing books (which 0.1% of the population does)?

## Make basic code intelligence ubiquitous (in every editor and language)

Every developer deserves to have all these features work 100% of the time:

* Jump to definition
* Hover tooltips (with type info and docs)
* Semantic code search
* Find references (local and cross-repository)
* Autocomplete
* Automatic formatting
* Inline errors, linting, and diagnostics

The above features should be expected:

* For every language (especially dynamic languages, such as JavaScript, Python, and Ruby)
* In every IDE and every text editor (so you can use your editor of choice)
* Everywhere you read code (on GitHub, Bitbucket, GitLab, Visual Studio Team Services, Stack Overflow, Phabricator, Sourcegraph, etc.)
* Everywhere you review code (in pull requests on GitHub, etc.)
* For both your own code and the code of all of your dependencies
* With zero configuration

Getting this basic code intelligence everywhere is an obvious win. Unfortunately, it&#39;s far too difficult to install and configure it today, so most developers are missing these benefits for a large portion of their work.

The current approach is broken because it&#39;s an &quot;m-times-n&quot; solution: one tool for each combination of m applications (Vim, Emacs, Visual Studio, Sublime, IntelliJ, Eclipse, GitHub&#39;s code file viewer, Codenvy, etc.) and n languages (JavaScript, C++, Java, C#, Python, etc.). This means we&#39;d need thousands of individual tools, all maintained independently, to get complete coverage.

Here&#39;s how to fix it and bring basic code intelligence to every developer, everywhere:

1. Transform the &quot;m-times-n&quot; language-editor tool problem into a more manageable &quot;m-plus-n&quot; problem by using the <a target="_blank" href="https://github.com/Microsoft/language-server-protocol">Language Server Protocol (LSP)</a> open standard
  * Create open-source LSP language servers for every language — <a target="_blank" href="http://langserver.org/">in progress</a>
  * Create open-source LSP adapter plugins for every editor, code viewer, and code review tool — <a target="_blank" href="http://langserver.org/">in progress</a>
  * Provide the infrastructure for language server developers to measure coverage and accuracy over a large dataset of open-source code — **in progress**
2. Make it easy for projects to supply the necessary configuration (if any) so that everyone gets code intelligence on the project&#39;s code
3. Make it quick and easy to add/install code intelligence for any language in your tools of choice

The end result is that anytime you look at code, you have the full power of a perfectly configured IDE.

See how good your team&#39;s dev tools are
<a target="_blank" href="https://text.sourcegraph.com/the-sourcegraph-test-v0-9-12-more-steps-to-better-code-e5c281850c">Take the Sourcegraph test</a>

## Make code review continuous and more intelligent

Code review is supposed to improve quality and share knowledge. But few teams feel their code review process (if any) is effective, because today&#39;s tools make code review a manual, error-prone process performed (far too often) at the very end of the development cycle.

Toyota long ago showed that high-quality production processes should be the opposite: continuous (to find defects immediately, not after the car is fully assembled) and systematic (based on checklists compiled from experience). Medicine and aviation also recognize the value of this approach. We&#39;ll apply these principles to make code review continuous and more intelligent, so you can:

* See realtime impact analysis of any changes, in the form of a checklist of possible impacts/defects drawn from:
  * Code intelligence (call graph/dependencies)
  * Repository data (merge conflicts, blame/authorship)
  * Heuristics from past code reviews
* Likewise, see your teammates&#39; work-in-progress changes that affect your current work
* Quickly share code with teammates to get help or informal reviews instead of waiting until the end
* Automatically and always have code reviewed by the right teammates
* When reviewing code, easily run the changes locally (instead of just reading the code)

Current code review tools aren&#39;t able to provide these things because they lack code intelligence and a way to give realtime feedback on your local work-in-progress changes. The previous step (bringing basic code intelligence to everyone in all the tools they use) fixes this: it provides the underlying analysis to automatically enumerate possible impacts/defects—and the UI (in their editor and other existing tools) to collect and present this information as needed.

Here&#39;s how we&#39;ll bring continuous, intelligent code review (as described above) to every team:

* Add basic code intelligence (jump-to-def, hover, find-references, etc.) to diff views in code review tools (GitHub pull requests, etc.) &mdash; ✔ done
* Apply code intelligence to provide an impact analysis checklist for every change in every code review tool
* Create a way to enable quick sharing of code in your working tree
Make this all realtime, automatically updated as you make changes in your editor

## Build the global code graph

The fundamental problem of software development is that most developers spend most of their time doing things that aren&#39;t core to solving their actual problem. Of all the code you write, only a tiny fraction is core to your particular business or application. Likewise for the bugs you spend time fixing.

We will make it much easier to create and reuse public, open-source code by giving everyone access to the global code graph. The global code graph is the collection of all the code in the world, stored in a system that understands the dependency and call graph relationships across tens of millions of codebases. It's what powers the features in the previous steps.

This will increase the amount and reusability of available code by 10-100x because the current tools for creating and using open-source code are very limited. For one: creators and maintainers of open-source projects have no data about who&#39;s using their project and how, except from bug reports. Imagine running and stocking a supermarket if you only knew what items customers returned, not what they bought.

The global code graph will make it easier and more rewarding to create and maintain open-source code:

* Users can opt in to share aggregate data about how they&#39;re using open-source projects (what APIs, patterns, etc., they use), determined automatically from the users&#39; own code. Every project&#39;s community will grow because every user becomes a contributor.
* Projects can use this information to prioritize enhancements, bug fixes, documentation, etc.
* Creators and maintainers can see and understand how they are helping hundreds or thousands of people all around the world (instead of just seeing bug reports and stars).

The global code graph will also make it easier for you to find and reuse high-quality open-source code:

* When coding, you can see contextual usage examples/patterns and discussions based on everyone else&#39;s similar (opted-in) code—on the web or in your editor.
* If you make a common mistake that other users have encountered and flagged, you&#39;ll be notified immediately. When a library releases an update, you&#39;ll be notified about the impact it has on your own code, and you can see information from everyone else who has upgraded.
* When evaluating a library, you can see how many people are actively using it, what APIs they&#39;re calling, what other libraries they&#39;re using alongside it, etc., to make the best decision about which library to use.

We&#39;ll build open-source tools and open APIs to make these data and features accessible to every developer, in every environment, in every workflow. Code hosts, monitoring tools, cloud providers, etc., will also be able to enhance their own products by using and adding to the global code graph.

The global code graph is inevitable and universally beneficial, and there are many important things to get right:

* How do we get developers to opt in to contribute to the graph, not just consume it (i.e., avoid the tragedy of the commons)? Developers, ourselves included, are very privacy conscious. But developers also love to help each other and advance technology—no other profession shares as much and as openly as developers. Open source itself is evidence of this.
* For developers who opt in to sharing with the graph, how do we extract useful signals from code without leaking sensitive information?
* And many more things. We released this master plan early so we can start the community discussion and do it right, together.

Getting these right and building the global code graph means you&#39;ll be able to find and use more existing, high-quality open-source components for the common parts of your application, so you can focus on solving the problems that are unique to your business or project.
