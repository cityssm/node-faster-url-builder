/**
 * Tests if a base URL is valid.
 * @param fasterBaseUrl - A possible FASTER Web base URL.
 * @returns `true` if the base URL is valid.
 */
export function isValidBaseUrl(fasterBaseUrl) {
    return (fasterBaseUrl.startsWith('https://') && fasterBaseUrl.endsWith('/FASTER'));
}
export class FasterUrlBuilder {
    /** Base URL */
    baseUrl;
    /** Login URL */
    loginUrl;
    #inventorySearchUrl;
    inventoryItemRequestSearchUrl;
    // eslint-disable-next-line no-secrets/no-secrets
    #workOrderSearchUrl;
    #workOrderUrl;
    /** Report Viewer URL - Parameters required */
    reportViewerUrl;
    technicianWorkstationUrl;
    /**
     * Initializes the FasterUrlBuilder
     * @param fasterTenantOrBaseUrl - The subdomain of the FASTER Web URL before ".fasterwebcloud.com"
     *                                or the full domain and path including "/FASTER"
     */
    constructor(fasterTenantOrBaseUrl) {
        this.baseUrl = fasterTenantOrBaseUrl.startsWith('https')
            ? fasterTenantOrBaseUrl
            : `https://${fasterTenantOrBaseUrl}.fasterwebcloud.com/FASTER`;
        if (!isValidBaseUrl(this.baseUrl)) {
            throw new Error(`Invalid base URL: ${this.baseUrl}`);
        }
        this.loginUrl = `${this.baseUrl}/Login`;
        /* Inventory */
        this.#inventorySearchUrl = `${this.baseUrl}/Domains/Parts/Search/Default.aspx?xact=False&type=False&str=`;
        this.inventoryItemRequestSearchUrl = `${this.baseUrl}/Domains/Parts/PartRequest/PartsRequest.aspx`;
        /* Maintenance */
        // eslint-disable-next-line no-secrets/no-secrets
        this.#workOrderSearchUrl = `${this.baseUrl}/Domains/Maintenance/WorkOrder/Search/Default.aspx?xact=False&type=False&str=`;
        this.#workOrderUrl = `${this.baseUrl}/Domains/Maintenance/WorkOrder/WorkOrderMaster.aspx?workOrderID=`;
        /* Reports */
        this.reportViewerUrl = `${this.baseUrl}/Domains/Reports/ReportViewer.aspx`;
        /* Technician Workstation */
        this.technicianWorkstationUrl = `${this.baseUrl}Tech`;
    }
    /**
     * Builds a URL for the inventory search.
     * @param searchString - Item number search string
     * @returns Inventory search URL
     */
    inventorySearchUrl(searchString = '') {
        return `${this.#inventorySearchUrl}${searchString}`;
    }
    /**
     * Builds a URL for a given work order.
     * @param workOrderNumber - Work order number
     * @returns Work order URL
     */
    workOrderUrl(workOrderNumber) {
        return `${this.#workOrderUrl}${workOrderNumber}`;
    }
    /**
     * Builds a URL for the work order search.
     * @param searchString - Work order number or asset number search string
     * @returns Work order search URL
     */
    workOrderSearchUrl(searchString = '') {
        return `${this.#workOrderSearchUrl}${searchString}`;
    }
}
export default FasterUrlBuilder;
