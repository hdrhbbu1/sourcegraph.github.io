# Sourcegraph docs

This repository contains static documents and pages that are hosted at `sourcegraph.com/PAGE`.

See  for the listing of documents.

## Editing a document

1. Check [`index.json`](./index.json) to see which file to edit. The keys are the page's path underneath `sourcegraph.com`.
2. Edit the file in this repository.
3. Commit and push.

The changes will be live on Sourcegraph.com within seconds of pushing.

## Adding a document

1. Add a new entry to [`index.json`](./index.json). Make sure the page's path doesn't conflict with any existing page paths.
2. Create the file referenced in the entry.

The new document will be live on Sourcegraph.com within seconds of pushing.
