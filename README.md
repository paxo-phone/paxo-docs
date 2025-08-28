# Documentation PaxOS

![PAXO Logo](https://github.com/paxo-phone/PaxOS-9/assets/45568523/ddb3b517-605c-41b4-8c1e-c8e5d156431b)

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Discord](https://img.shields.io/discord/747816102250643506?label=Discord&logo=discord)](https://discord.com/invite/MpqbWr3pUG)
[![docs.paxo.fr](https://github.com/paxo-phone/paxo-docs/static/img/logo.svg)](https://docs.paxo.fr)

Pour la consulter au format Markdown, allez dans le dossier `docs` du repo.

## A l'attention des contributeurs
Le site web se met à jour automatiquement lorsqu'un commit est publié sur la branche `main`. Merci de faire des PR pour faire des modifications.


## Installation

```bash
npm install
npm install rss-parser turndown axios

```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
npm run serve
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

