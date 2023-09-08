<!-- markdownlint-disable MD041 MD029 -->

### TrueBlocks Documentation

GitHub repo for [TrueBlocks.io](https://trueblocks.io).

[![hugo rsync](https://github.com/TrueBlocks/trueblocks-docs/actions/workflows/build-and-deploy.yaml/badge.svg)](https://github.com/TrueBlocks/trueblocks-docs/actions/workflows/build-and-deploy.yaml) [![link checker](https://github.com/TrueBlocks/trueblocks-docs/actions/workflows/check-links.yaml/badge.svg)](https://github.com/TrueBlocks/trueblocks-docs/actions/workflows/check-links.yaml)

To develop on this site, you need `yarn` and `hugo`.

1. Install yarn dependencies

```shell
npm install
```

2. serve hugo to local host

```shell
hugo serve --disableFastRender --logLevel info
```

## Important directories:

- The Homepage is in the `layouts/index.html`
- Content templates go in `archetypes`
- `layouts` contains all information about templates
- `config/_default/menus.toml` contains the structure for the overall menu and the section menus

## How to add a page

`hugo new content/<section>/document-title.md`

## How to add menu items

Open up `config/_default/menus.toml`.

If you want to add a head section, add a config to [[main]].

```TOML
[[main]]
name = "Docs"
url = "/docs/prologue/introduction/"
weight = 10
```

The more "weight", the farther to the left it will be.

Then change some files in `layouts`. Check out the files the template owner changed [here](https://github.com/atwriter/new_doks_site/pull/1).

If you want to add a subsection, it will look like this under `[[<section-name>]]`

```TOML
[[docs]]
name = "Tools"
weight = 20
identifier = "tools"
url = "/docs/concepts/"
```

The more weight it has, the farther down the section will be.

When you create content, you probably want to create corresponding directories in `content`.

## Contributing

We love contributors. Please see information about our [work flow](https://github.com/TrueBlocks/trueblocks-core/blob/develop/docs/BRANCHING.md) before proceeding.

1. Fork this repository into your own repo.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make changes to your local branch and commit them to your forked repo: `git commit -m '<commit_message>'`
4. Push back to the original branch: `git push origin TrueBlocks/trueblocks-docs`
5. Create the pull request.

## Contact

If you have questions, comments, or complaints, please join the discussion on our discord server which is [linked from our website](https://trueblocks.io).

## List of Contributors

Thanks to the following people who have contributed to this project:

- [tjayrush](https://github.com/tjayrush)
- [MattDodsonEnglish](https://github.com/MattDodsonEnglish)
