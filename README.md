# OCDS Show

A tool for displaying OCDS releases and records.

* This tool will try and convert a record/release into HTML (in progress)
* Create a javascript widget using this HTML.

[Visit a live version of the tool](https://open-contracting.github.io/ocds-show/).

## Installation

Clone this repository and run:

    npm install .

## Development

In order to compile the templates ready to use in the browser run:

    node build-frontend.js

Or, to watch the templates and re-compile them after any changes:

    node build-frontend.js -w

A test file can be found in example/release_input.html.

To run tests, install development dependencies:

    npm install --only=dev

Then, run:

    npm test

## Templates

Some templates have an OCDS for PPPs version, suffixed by `_ppp`. Besides referring to suffixed templates wherever possible, the differences are:

* `award_ppp.html`: Change: suppliers to preferred bidders. Add block: agreed metrics.
* `contract_ppp.html`: Add blocks: agreed metrics, signatories, implementation metrics.
* `planning_ppp.html`: Remove definition list items for deprecated budget fields: source, project, project ID. Add blocks: budget breakdown, project, forecasts.
* `release_ppp.html`: Change: `release.tender.title` to `release.title`, metadata to description. Add menu items and blocks: social witness, public authority, pre-qualification, bids. Remove menu items and blocks: procuring entity, buyer. Add panel body: release description.
* `tender_ppp.html`: Add: criteria, targets.

`organization_ppp.html` extends `organization.html` instead of rewriting it.

To diff the non-PPP and PPP templates, run (in fish shell):

    for i in *_ppp.html; diff -u (echo $i | sed s/_ppp//) $i; end | less
