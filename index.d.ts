type FasterBaseUrl = `https://${string}.fasterwebcloud.com/FASTER`;
export declare class FasterUrlBuilder {
    #private;
    /** Base URL */
    readonly baseUrl: FasterBaseUrl;
    /** Login URL */
    readonly loginUrl: `${FasterBaseUrl}/Login`;
    /** Report Viewer URL - Parameters required */
    readonly reportViewerUrl: `${FasterBaseUrl}/Domains/Reports/ReportViewer.aspx`;
    /**
     * Initializes the FasterUrlBuilder
     * @param fasterTenant - The subdomain of the FASTER Web URL before ".fasterwebcloud.com"
     */
    constructor(fasterTenant: string);
    /**
     * Builds a URL for the inventory search.
     * @param searchString - Item number search string
     * @returns Inventory search URL
     */
    inventorySearchUrl(searchString?: string): string;
    /**
     * Builds a URL for a given work order.
     * @param workOrderNumber - Work order number
     * @returns Work order URL
     */
    workOrderUrl(workOrderNumber: number | string): string;
    /**
     * Builds a URL for the work order search.
     * @param searchString - Work order number or asset number search string
     * @returns Work order search URL
     */
    workOrderSearchUrl(searchString?: string): string;
}
export default FasterUrlBuilder;
