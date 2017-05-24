---
layout: docs
title: Overview
---

# Overview

Sourcegraph is a tool that helps developers explore and understand code. These docs describe how to use Sourcegraph in your development workflow. If you have any problems or requests, please contact <a href="#contact_us">support</a>.

 * Code Intelligence
    * Definition Information
    * Go to Definition
    * Find Local and External References
 * Search
    * Repository Search
    * File Search
    * Definition Search
 * Chrome Extension
    * Hover over Documentation
    * Go to Definition
    * Keyboard Shortcuts
 * Languages Supported

## Code Intelligence

Sourcegraph’s code intelligence provides you with full context of the code you are reading, without leaving the page.

### Definition Information

Click on a symbol and you'll get a view that includes the symbol's definition, any documentation provided, an ability to jump to where it's defined, and a list of where it's referenced both in the current repository, and every other publicly available repository on GitHub.

### Go to Definition

Command + Click (on a Mac) or Ctrl + Click (on a PC) any symbol and you will be taken to where it is defined.

### Find Local and External References

After clicking a symbol, references to the symbol in the current repository are listed in the side panel.

Click a reference and see that code appear over your current view. To dismiss it, simply click the '&times;' in the reference header, or click out of the reference view to go back to where you were.

External references are also listed in the side panel, below the local references. These are the all of the places the symbol is referenced across all publicly viewable code on GitHub.

## Search

Sourcegraph allows you to quickly jump between code definitions, files, and repositories through our snappy search interface. Bring up the search bar by:

 - hitting "/" from anywhere on sourcegraph.com, or
 - clicking the search icon in the nav bar

### Repository Search

Jump to any publicly viewable GitHub repository and also any private repositories you've authenticated.

### File Search

Once you are within a repository, you can jump to any file within the repository.

### Definition Search

Once you are within a repository, you can jump to any definition. A definition can be any function, method, struct, type, variable, or package.

## Chrome Extension

Sourcegraph's Chrome extension allows you to browse GitHub with IDE-like functionality.

<a href="https://chrome.google.com/webstore/detail/sourcegraph-for-github/dgjhfomjieaadpoljlnidmbgkdffpack">Install our Chrome extension</a>

### Hover over Documnentation

Hover over any symbol on GitHub to get its type information and documentation.

### Go to Definition

Click on a symbol on GitHub to go to its definition.

### Keyboard Shortcuts

Press `u` when viewing code on GitHub to navigate to the same code on Sourcegraph.com.

## Languages Supported

### Sourcegraph supports:			

- Go
- Java (Maven, Gradle, Android)
- TypeScript (alpha)
- JavaScript (alpha)

### Coming soon:

- Python
- PHP

## Support

Want to request a feature or find a bug? Email <a href="mailto:support@sourcegraph.com">support@sourcegraph.com</a>.