# as-subtle
An AssemblyScript module for constant-time APIs. This module is heavily modelled after the [Go subtle package](https://golang.org/pkg/crypto/subtle/) and Dalek Cryptography's [Rust subtle crate](https://github.com/dalek-cryptography/subtle).

## Installation
Via NPM:
`npm install hashcloak/as-subtle`

Via Yarn:
`yarn add hashcloak/as-subtle`

## Usage
Simply import the functions you want into your project. For example,

`import {constArrayCompare} from "subtle"`

## Docs
TODO

## Contributing
See **CONTRIBUTING.md**

## Warning
Constant-time APIs is only a facet of writing safe cryptographic code. As such, do seek external audits for any such project.
Use at your own risk.
