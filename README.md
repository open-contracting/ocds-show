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
