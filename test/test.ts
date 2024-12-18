import assert from 'node:assert'
import { describe, it } from 'node:test'

import { FasterUrlBuilder, isValidBaseUrl } from '../index.js'

await describe('faster-url-builder', async () => {
  const tenant = 'faster-tenant'
  const fasterUrlBuilder = new FasterUrlBuilder(tenant)

  await it('Initializes with a full base URL', () => {
    const testBaseUrl = 'https://test.example.com/FASTER'
    const fasterUrlBuilderFromUrl = new FasterUrlBuilder(testBaseUrl)
    assert.strictEqual(fasterUrlBuilderFromUrl.baseUrl, testBaseUrl)
  })

  await it('Constructs the base URL from a tenant', () => {
    assert(fasterUrlBuilder.baseUrl.includes(tenant))
  })

  await it('Constructs a login URL', () => {
    assert(fasterUrlBuilder.loginUrl.startsWith(fasterUrlBuilder.baseUrl))
  })

  await it('Constructs a report viewer URL', () => {
    assert(
      fasterUrlBuilder.reportViewerUrl.startsWith(fasterUrlBuilder.baseUrl)
    )
  })

  await it('Constructs a technician workstation URL', () => {
    assert(
      fasterUrlBuilder.technicianWorkstationUrl.startsWith(
        fasterUrlBuilder.baseUrl
      )
    )
  })

  await it('Constructs an inventory search URL', () => {
    const searchString = '00001'
    const inventorySearchUrl = fasterUrlBuilder.inventorySearchUrl(
      searchString
    ) as string

    assert(inventorySearchUrl.startsWith(fasterUrlBuilder.baseUrl))
    assert(inventorySearchUrl.endsWith(searchString))
  })

  await it('Constructs an inventory item request search URL', () => {
    assert(
      fasterUrlBuilder.inventoryItemRequestSearchUrl.startsWith(
        fasterUrlBuilder.baseUrl
      )
    )
  })

  await it('Constructs a work order search URL', () => {
    const searchString = '00001'
    const workOrderSearchUrl = fasterUrlBuilder.workOrderSearchUrl(
      searchString
    ) as string

    assert(workOrderSearchUrl.startsWith(fasterUrlBuilder.baseUrl))
    assert(workOrderSearchUrl.endsWith(searchString))
  })

  await it('Constructs a work order URL', () => {
    const workOrderNumber = 10
    const workOrderUrl = fasterUrlBuilder.workOrderUrl(
      workOrderNumber
    ) as string

    assert(workOrderUrl.startsWith(fasterUrlBuilder.baseUrl))
    assert(workOrderUrl.endsWith(workOrderNumber.toString()))
  })
})

await describe('faster-url-builder/errors', async () => {
  await it('Rejects invalid base URLs', () => {
    // http link
    assert.strictEqual(isValidBaseUrl('http://test.example.com/FASTER'), false)

    // missing "/FASTER"
    assert.strictEqual(isValidBaseUrl('https://test.example.com'), false)

    let declaredSuccessfully = false

    // eslint-disable-next-line @typescript-eslint/init-declarations
    let builder: FasterUrlBuilder | undefined

    try {
      builder = new FasterUrlBuilder('https://test.example.com/FASTE')
      declaredSuccessfully = true
    } catch {}
    if (declaredSuccessfully) {
      assert.fail(
        `URL builder declared successfully with invalid URL: ${(builder as FasterUrlBuilder).baseUrl}`
      )
    }
  })
})
