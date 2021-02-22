# OCDS Show

A tool for displaying OCDS releases and records. [Try it now!](https://open-contracting.github.io/ocds-show/)

## Features

You can set the `load` query string parameter to a URL for an OCDS release package or record package:

    https://open-contracting.github.io/ocds-show/?load=https://www.comprasestatales.gub.uy/ocds/release/llamado-631824

This is especially useful if you are embedding OCDS Show in an `<iframe>`, and want to auto-load some data.

**Note:** The URL must be served over HTTPS, because OCDS Show is served over HTTPS.

**Note:** The URL must respond with [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) indicating that OCDS Show has permission to access the resource, e.g. `Access-Control-Allow-Origin: *`.

## Installation

Clone this repository, then run:

    npm install .

## Development

To compile the templates, run:

    npm run build

Or, to re-compile the templates whenever they change, run:

    npm run build -- -w

## Testing

To run tests, install development dependencies:

    npm install --only=dev

Then, run:

    npm test

## Maintenance

Some templates have an OCDS for PPPs version, suffixed by `_ppp`. Besides referring to suffixed templates wherever possible, the differences are:

* `award_ppp.html`: Change: suppliers to preferred bidders. Add block: agreed metrics.
* `contract_ppp.html`: Add blocks: agreed metrics, signatories, implementation metrics.
* `planning_ppp.html`: Remove definition list items for deprecated budget fields: source, project, project ID. Add blocks: budget breakdown, project, forecasts.
* `release_ppp.html`: Change: `release.tender.title` to `release.title`, metadata to description. Add menu items and blocks: social witness, public authority, pre-qualification, bids. Remove menu items and blocks: procuring entity, buyer. Add panel body: release description.
* `tender_ppp.html`: Add: criteria, targets.

`organization_ppp.html` extends `organization.html` instead of rewriting it.

To diff the non-PPP and PPP templates, run (in fish shell):

    for i in *_ppp.html; diff -u (echo $i | sed s/_ppp//) $i; end | less
