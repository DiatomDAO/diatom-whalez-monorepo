# Diatom Serverless API

`diatom.fund` provides a serverless API to make fetching data about the Diatom ecosystem easier. [An Insomnia manifest is provided for example.](./docs/insomnia.json)

## Keeping Up To Date

Diatom is a new project and these API endpoints may change, be sure to join [`#developers` in the Diatom Discord](https://discord.gg/diatomdao) to keep informed.

## API Convention

`https://diatom.fund/.netlify/functions/<version>/<function name>`

## `V0`

The `V0` namespace is an incubator for serverless functions before the next stable version release. Functions within this namespace may change before becoming promoted. Once promoted to "stable" they'll get their final function names and will be locked in. Any further function changes will result in new function names on breaking changes.

## Endpoints and Schema

See the [OpenAPI Spec File for detailed information about the API](docs/swagger.yaml).
