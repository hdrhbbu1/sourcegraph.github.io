---
layout: markdown
title: Frequently Asked Questions
---

**What is Sourcegraph?**

Sourcegraph is a better way for you to read a codebase on the web with the full power and intelligence of an editor—without the hassle of cloning or configuration. It provides jump-to-def, hovers, find references, advanced search, symbol search, cross-repo references, etc., for any repository and any commit on GitHub (in Go, Java, and some other languages... more coming soon).

If you find yourself reading code on GitHub a lot, or cloning repos to open and read in your editor, you'll find Sourcegraph useful. If not, then you probably won't find it useful yet, but you might like our Chrome extension, which adds these features inline on GitHub.com [Sourcegraph for GitHub Chrome extension](https://chrome.google.com/webstore/detail/sourcegraph-for-github/dgjhfomjieaadpoljlnidmbgkdffpack).

**Can I edit code on Sourcegraph?**

No. Sourcegraph is for reading code. You can keep it open alongside your favorite editor to help with all the times you need to read code. Sourcegraph does have [editor and browser extensions](#extensions) to jump from editing code to reading and searching code easily. 

**What languages are supported for code intelligence?**
<!--See full language support information in our documentation (link to language matrix in /docs).-->
_All languages_: inline authorship/blame, instant real-time code search, across all repositories, branches, and commits

_Full support_: cross-repo and local jump-to-definition, global and local references, hover tooltips, symbol search
Go, Java

_Partial support_: a subset of the features in general availability
Typescript

_In development_: development of the [Language Server Protocol servers](http://langserver.org/)
JavaScript, Python, Swift
<!--Need to update languages on docs and master plan-->

**How does code intelligence work in Sourcegraph?**

We use and contribute to Language Server Protocol, an open protocol originally created and open-sourced by Microsoft that defines a set of standard Code Intelligence capabilities for editor plugins. Learn more on our blog post, [How Sourcegraph scales with the Language Server Protocol](https://text.sourcegraph.com/how-sourcegraph-scales-with-the-language-server-protocol-a4e8fd3fbae5)

**What repositories can you use on Sourcegraph.com?**

* All public repositories 
* Private repositories that belong to an organization you have authenticated
* Repositories hosted on-premises can use [Sourcegraph Enterprise](https://sourcegraph.com/enterprise)

Sourcegraph.com currently supports code hosted on GitHub.com. Coming soon are cloud hosted repositories on Bitbucket, GitLab, Google Cloud Source Repositories and more. All git-based repositories available with Sourcegraph Enterprise. 

See our [pricing page](http://sourcegraph.com/pricing) for more information

**What if I my company hosts our code on-premises?**

[Sourcegraph Enterprise](https://sourcegraph.com/enterprise), our on-premises offering, integrates with all git-based code hosts and review systems, including GitHub Enterprise, Atlassian Bitbucket, Phabricator, and GitLab.

**What about keyboard shortcuts?**

There are a ton of keyboard shortcuts, and they (mostly) match VS Code's default ones. To see them all, hit `Shift+Cmd+P` (`or Shift+Ctrl+P`), and go to 'Preferences: Open Keyboard Shortcuts'.

Here are some of the key (no pun intended) ones:

* `Opt+S`: Open QuickOpen (omni-search: searches files, workspace symbols, and repos) - `Cmd-P` and `F1` also work
* `Opt+R`: Go to repository
* `Opt+X`: Run command (e.g., 'Open User Settings')
* `Opt+D`: Go to symbol in workspace
* `Shift+Opt+D`: Go to symbol in file

**<a id="extensions"></a>How can I integrate Sourcegraph with my existing tools and workflow?**

Sourcegraph editor extensions do the following:

* Instantly jump from your editor to your current position in any repo, file, and branch on sourcegraph.com to quickly share with teammates, or to get inline blame, cross-repo jump-to-definition, and cross-repo references
* Open file at cursor in sourcegraph.com
* Instantly search for text from your editor across all of your repositories on sourcegraph.com

Supported editors are: Atom, Eclipse, IntelliJ, Sublime, and VS Code. (links)

Sourcegraph also has web browser extensions for GitHub. Learn more about our Chrome extension, [Sourcegraph for GitHub](https://chrome.google.com/webstore/detail/sourcegraph-for-github/dgjhfomjieaadpoljlnidmbgkdffpack). Our Firefox extension, Sourcegraph for GitHub, is coming soon. 

Also available is the [Jump to Sourcegraph bookmarklet]
(https://gist.github.com/sqs/2a2680eff4dad159ae754756fe9326c2)

**Is it possible to install or build extensions on sourcegraph.com?** 

We currently don't support installing extensions in our UI, but it's something we're interested in.

**Is Sourcegraph a web IDE?**

No, Sourcegraph is for reading code. It gives you the full power of an editor (jump-to-def, hovers, find references, advanced search, symbol search, cross-repo references) for any repo at any commit on GitHub. Sourcegraph does have [editor and browser extensions](#extensions) to jump from editing code to reading and searching code easily.

**Is there a Sourcegraph API?**

We have an API available to customers using Sourcegraph Enterprise on-premises. In the future, we plan to open up the API to all users. 

If your business is interested in integrating with our API, let us know at [hi@sourcegraph.com](mailto:hi@sourcegraph.com)!

**Is there a Sourcegraph mobile app (for iPhone, iPad, Android, etc.)?**

Not yet. Sourcegraph.com has partial support for mobile browsers, and we are working on adding first-class mobile web support. We've heard from many users who love reading code on their tablets and phones, and we want to make Sourcegraph the best way for them to do that.

**Any other questions?**

Send us an email, <a href="mailto:support@sourcegraph.com">support@sourcegraph.com</a>.
