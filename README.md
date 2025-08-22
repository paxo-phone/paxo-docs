# Documentation Paxo

Vous pouvez retrouver cette doc au format web: [https://docs.paxo.fr](docs.paxo.fr)

Pour la consulter au format Markdown, allez dans le dossier `docs` du repo.

## A l'attention des contributeurs
Le site web se met à jour automatiquement lorsqu'un commit est publié sur la branche `main`. Merci de faire des PR pour faire des modifications.


## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
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
