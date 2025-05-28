# FASTER Web URL Builder

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/faster-url-builder)](https://www.npmjs.com/package/@cityssm/faster-url-builder)
[![codecov](https://codecov.io/gh/cityssm/node-faster-url-builder/graph/badge.svg?token=JP9K9I27WP)](https://codecov.io/gh/cityssm/node-faster-url-builder)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-faster-url-builder.svg/?label=active+issues&show_trend=true&token=GLlKrpnVzE3Qg4436K556yJu)](https://app.deepsource.com/gh/cityssm/node-faster-url-builder/)
[![Coverage Testing](https://github.com/cityssm/node-faster-url-builder/actions/workflows/coverage.yml/badge.svg)](https://github.com/cityssm/node-faster-url-builder/actions/workflows/coverage.yml)

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
// => https://test-tenant.fasterwebcloud.com/FASTER/Login
```

## Included URLs

- `baseUrl`
- `loginUrl`
- `inventoryItemRequestSearchUrl`
- `reportViewerUrl`
- `scheduledReportsUrl`
- `integrationsUrl`
- `technicianWorkstationUrl`

## Included Helper Functions

- `inventorySearchUrl(searchString, exactMatch)`
- `itemUrl(itemId)`
- `workOrderSearchUrl(searchString, exactMatch)`
- `workOrderUrl(workOrderNumber)`

## Related Projects

_Building an intergration with FASTER Web?_

[Have a look at the City's open source projects related to FASTER Web](https://github.com/cityssm/faster-web-projects).
