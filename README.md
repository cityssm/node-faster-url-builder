# FASTER Web URL Builder

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
