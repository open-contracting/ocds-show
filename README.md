# OCDS Show for PPPs

A tool for displaying OCDS releases and records, with support for the [PPP profile](http://standard.open-contracting.org/profiles/ppp/latest/en/) of OCDS.

## This repository

This repo contains a copy of [OCDS Show](https://github.com/open-contracting/ocds-show), and exists to use GitHub Pages to host a version of OCDS Show that is branded for PPPs. The code is identical, apart from styling and titles.

Any issues, queries or requests regarding the code should be made via GitHub issues on the [ocds-show repository](https://github.com/open-contracting/ocds-show/issues).

Any issues relating to the GitHub Pages hosting of OCDS Show for PPPs should be reported as an issue on this repository.

OCDS Show is available under an open-source license, and adaption to other OCDS profiles and extensions is encouraged.

## Installation

To install OCDS Show for PPPs, clone this repository and run

`npm install .`

## Development

In order to compile the templates ready to use in the browser run

`node build-frontend.js -w`

The -w will watch the template files and recompile them after any changes.

A test file can be found in `example/release_input.html`.
