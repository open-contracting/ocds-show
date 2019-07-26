# OCDS Show

A tool for displaying OCDS releases and records. [Try it now!](https://open-contracting.github.io/ocds-show/)

## Installation

Clone this repository, then run:

    npm install .

## Development

To compile the templates, run:

    node build-frontend.js

Or, to re-compile the templates whenever they change, run:

    node build-frontend.js -w

## Testing

To run tests, install development dependencies:

    npm install --only=dev

Then, run:

    npm test

## Maintenance

The `full.json` and `full_record_package.json` example files are used by the [OCDS for Public Private Partnerships](https://github.com/open-contracting-extensions/public-private-partnerships) profile, and therefore should not be edited except as part of work on that profile.

Some templates have an OCDS for PPPs version, suffixed by `_ppp`. Besides referring to suffixed templates wherever possible, the differences are:

* `award_ppp.html`: Change: suppliers to preferred bidders. Add block: agreed metrics.
* `contract_ppp.html`: Add blocks: agreed metrics, signatories, implementation metrics.
* `planning_ppp.html`: Remove definition list items for deprecated budget fields: source, project, project ID. Add blocks: budget breakdown, project, forecasts.
* `release_ppp.html`: Change: `release.tender.title` to `release.title`, metadata to description. Add menu items and blocks: social witness, public authority, pre-qualification, bids. Remove menu items and blocks: procuring entity, buyer. Add panel body: release description.
* `tender_ppp.html`: Add: criteria, targets.

`organization_ppp.html` extends `organization.html` instead of rewriting it.

To diff the non-PPP and PPP templates, run (in fish shell):

    for i in *_ppp.html; diff -u (echo $i | sed s/_ppp//) $i; end | less
