# OCDS SHOW

A tool for displaying OCDS releases and records.

* This tool will try and convert a record/release into HTML (in progress)
* Create a javascript widget using this HTML.

[Visit a live version of the tool](https://open-contracting.github.io/ocds-show/).

## Installation

Clone this repository and run

`npm install .`

## Development

In order to compile the templates ready to use in the browser run

`node build-frontend.js -w`

The -w option will watch the template files and recompile them after any changes.

A test file can be found in example/release_input.html.
