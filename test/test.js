import assert from 'node:assert';
import { describe, it } from 'node:test';
import { FasterUrlBuilder, isValidBaseUrl } from '../index.js';
await describe('faster-url-builder', async () => {
    const tenant = 'faster-tenant';
    const fasterUrlBuilder = new FasterUrlBuilder(tenant);
    await it('Initializes with a full base URL', () => {
        const testBaseUrl = 'https://test.example.com/FASTER';
        const fasterUrlBuilderFromUrl = new FasterUrlBuilder(testBaseUrl);
        assert.strictEqual(fasterUrlBuilderFromUrl.baseUrl, testBaseUrl);
    });
    await it('Constructs the base URL from a tenant', () => {
        assert.ok(fasterUrlBuilder.baseUrl.includes(tenant));
    });
    await it('Constructs a login URL', () => {
        assert.ok(fasterUrlBuilder.loginUrl.startsWith(fasterUrlBuilder.baseUrl));
    });
    await it('Constructs a report viewer URL', () => {
        assert.ok(fasterUrlBuilder.reportViewerUrl.startsWith(fasterUrlBuilder.baseUrl));
    });
    await it('Constructs a scheduled reports URL', () => {
        assert.ok(fasterUrlBuilder.scheduledReportsUrl.startsWith(fasterUrlBuilder.baseUrl));
    });
    await it('Constructs an integrations URL', () => {
        assert.ok(fasterUrlBuilder.integrationsUrl.startsWith(fasterUrlBuilder.baseUrl));
    });
    await it('Constructs a technician workstation URL', () => {
        assert.ok(fasterUrlBuilder.technicianWorkstationUrl.startsWith(fasterUrlBuilder.baseUrl));
    });
    await it('Constructs an inventory search URL', () => {
        const searchString = '00001';
        const inventorySearchUrl = fasterUrlBuilder.inventorySearchUrl(searchString);
        assert.ok(inventorySearchUrl.startsWith(fasterUrlBuilder.baseUrl));
        assert.ok(inventorySearchUrl.endsWith(searchString));
    });
    await it('Constructs an inventory item URL', () => {
        const itemId = 10;
        const itemUrl = fasterUrlBuilder.itemUrl(itemId);
        assert.ok(itemUrl.startsWith(fasterUrlBuilder.baseUrl));
        assert.ok(itemUrl.endsWith(itemId.toString()));
    });
    await it('Constructs an inventory item request search URL', () => {
        assert.ok(fasterUrlBuilder.inventoryItemRequestSearchUrl.startsWith(fasterUrlBuilder.baseUrl));
    });
    await it('Constructs a work order search URL', () => {
        const searchString = '00001';
        const workOrderSearchUrl = fasterUrlBuilder.workOrderSearchUrl(searchString);
        assert.ok(workOrderSearchUrl.startsWith(fasterUrlBuilder.baseUrl));
        assert.ok(workOrderSearchUrl.endsWith(searchString));
    });
    await it('Constructs a work order URL', () => {
        const workOrderNumber = 10;
        const workOrderUrl = fasterUrlBuilder.workOrderUrl(workOrderNumber);
        assert.ok(workOrderUrl.startsWith(fasterUrlBuilder.baseUrl));
        assert.ok(workOrderUrl.endsWith(workOrderNumber.toString()));
    });
});
await describe('faster-url-builder/errors', async () => {
    await it('Rejects invalid base URLs', () => {
        // http link
        assert.strictEqual(isValidBaseUrl('http://test.example.com/FASTER'), false);
        // missing "/FASTER"
        assert.strictEqual(isValidBaseUrl('https://test.example.com'), false);
        let declaredSuccessfully = false;
        const badInitialUrl = 'https://test.example.com/FASTE';
        try {
            // eslint-disable-next-line no-new
            new FasterUrlBuilder(badInitialUrl);
            declaredSuccessfully = true;
        }
        catch { }
        if (declaredSuccessfully) {
            assert.fail(`URL builder declared successfully with invalid URL: ${badInitialUrl}`);
        }
    });
});
