import assert from 'node:assert'
import { describe, it } from 'node:test'

import { FasterUrlBuilder } from '../index.js'

await describe('faster-url-builder', async () => {
  const tenant = 'faster-tenant'
  const fasterUrlBuilder = new FasterUrlBuilder(tenant)

  await it('Constructs a proper base URL', () => {
    assert(fasterUrlBuilder.baseUrl.includes(tenant))
  })

  await it('Constructs a proper login URL', () => {
    assert(fasterUrlBuilder.loginUrl.startsWith(fasterUrlBuilder.baseUrl))
  })

  await it('Constructs a proper report viewer URL', () => {
    assert(
      fasterUrlBuilder.reportViewerUrl.startsWith(fasterUrlBuilder.baseUrl)
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
