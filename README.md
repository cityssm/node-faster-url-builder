# FASTER Web URL Builder

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/faster-url-builder)](https://www.npmjs.com/package/@cityssm/faster-url-builder)
[![Maintainability](https://api.codeclimate.com/v1/badges/e0a774a12da546a21225/maintainability)](https://codeclimate.com/github/cityssm/node-faster-url-builder/maintainability)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-faster-url-builder.svg/?label=active+issues&show_trend=true&token=GLlKrpnVzE3Qg4436K556yJu)](https://app.deepsource.com/gh/cityssm/node-faster-url-builder/)

Builds URLs for the
[FASTER Web Fleet Management System](https://fasterasset.com/products/fleet-management-software/).

Helpful when building integrations with FASTER Web that require links.

## Installation

```sh
npm install @cityssm/faster-url-builder
```

## Usage

```javascript
import { FasterUrlBuilder } from '@cityssm/faster-url-builder'

console.log(new FasterUrlBuilder('test-tenant').loginUrl)
// => https://test-tenant.fasterwebcloud.com/FASTER
```

## Included URLs

- `baseUrl`
- `loginUrl`
- `reportViewerUrl`

## Included Helper Functions

- `inventorySearchUrl(searchString)`
- `workOrderSearchUrl(searchString)`
- `workOrderUrl(workOrderNumber)`
