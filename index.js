export class FasterUrlBuilder {
    /** Base URL */
    baseUrl;
    /** Login URL */
    loginUrl;
    #inventorySearchUrl;
    #workOrderSearchUrl;
    #workOrderUrl;
    /** Report Viewer URL - Parameters required */
    reportViewerUrl;
    /**
     * Initializes the FasterUrlBuilder
     * @param fasterTenant - The subdomain of the FASTER Web URL before ".fasterwebcloud.com"
     */
    constructor(fasterTenant) {
        this.baseUrl = `https://${fasterTenant}.fasterwebcloud.com/FASTER`;
        this.loginUrl = `${this.baseUrl}/Login`;
        /* Inventory */
        this.#inventorySearchUrl = `${this.baseUrl}/Domains/Parts/Search/Default.aspx?xact=False&type=False&str=`;
        /* Maintenance */
        this.#workOrderSearchUrl = `${this.baseUrl}/Domains/Maintenance/WorkOrder/Search/Default.aspx?xact=False&type=False&str=`;
        this.#workOrderUrl = `${this.baseUrl}/Domains/Maintenance/WorkOrder/WorkOrderMaster.aspx?workOrderID=`;
        /* Reports */
        this.reportViewerUrl = `${this.baseUrl}/Domains/Reports/ReportViewer.aspx`;
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
