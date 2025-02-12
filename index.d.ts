export type FasterBaseUrl = `https://${string}/FASTER`;
/**
 * Tests if a base URL is valid.
 * @param fasterBaseUrl - A possible FASTER Web base URL.
 * @returns `true` if the base URL is valid.
 */
export declare function isValidBaseUrl(fasterBaseUrl: string): fasterBaseUrl is FasterBaseUrl;
export declare class FasterUrlBuilder {
    #private;
    /** Base URL */
    readonly baseUrl: FasterBaseUrl;
    /** Login URL */
    readonly loginUrl: `${FasterBaseUrl}/Login`;
    /** Inventory Item Request Search URL */
    readonly inventoryItemRequestSearchUrl: `${FasterBaseUrl}/Domains/Parts/PartRequest/PartsRequest.aspx`;
    /** Report Viewer URL - Parameters required */
    readonly reportViewerUrl: `${FasterBaseUrl}/Domains/Reports/ReportViewer.aspx`;
    /** Scheduled Reports URL */
    readonly scheduledReportsUrl: `${FasterBaseUrl}/Domains/Reports/Schedule.aspx`;
    /** Integrations Console URL */
    readonly integrationsUrl: `${FasterBaseUrl}/Domains/Integrations/Default.aspx`;
    /** Technician Workstation URL */
    readonly technicianWorkstationUrl: `${FasterBaseUrl}Tech`;
    /**
     * Initializes the FasterUrlBuilder
     * @param fasterTenantOrBaseUrl - The subdomain of the FASTER Web URL before ".fasterwebcloud.com"
     *                                or the full domain and path including "/FASTER"
     */
    constructor(fasterTenantOrBaseUrl: string);
    /**
     * Builds a URL for the inventory search.
     * @param searchString - Item number search string
     * @param exactMatch - `true` for exact match search
     * @returns Inventory search URL
     */
    inventorySearchUrl(searchString?: string, exactMatch?: boolean): string;
    /**
     * Builds a URL for a given item.
     * @param itemId - Item ID. This is not the item number.
     * @returns Item URL
     */
    itemUrl(itemId: number | string): string;
    /**
     * Builds a URL for a given work order.
     * @param workOrderNumber - Work order number
     * @returns Work order URL
     */
    workOrderUrl(workOrderNumber: number | string): string;
    /**
     * Builds a URL for the work order search.
     * @param searchString - Work order number or asset number search string
     * @param exactMatch - `true` for exact match search
     * @returns Work order search URL
     */
    workOrderSearchUrl(searchString?: string, exactMatch?: boolean): string;
}
export default FasterUrlBuilder;
