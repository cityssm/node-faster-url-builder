type FasterBaseUrl = `https://${string}.fasterwebcloud.com/FASTER`

export class FasterUrlBuilder {
  /** Base URL */
  readonly baseUrl: FasterBaseUrl

  /** Login URL */
  readonly loginUrl: `${FasterBaseUrl}/Login`

  readonly #inventorySearchUrl: `${FasterBaseUrl}/Domains/Parts/Search/Default.aspx?xact=False&type=False&str=`

  readonly #workOrderSearchUrl: `${FasterBaseUrl}/Domains/Maintenance/WorkOrder/Search/Default.aspx?xact=False&type=False&str=`
  readonly #workOrderUrl: `${FasterBaseUrl}/Domains/Maintenance/WorkOrder/WorkOrderMaster.aspx?workOrderID=`

  /** Report Viewer URL - Parameters required */
  readonly reportViewerUrl: `${FasterBaseUrl}/Domains/Reports/ReportViewer.aspx`

  /**
   * Initializes the FasterUrlBuilder
   * @param fasterTenant - The subdomain of the FASTER Web URL before ".fasterwebcloud.com"
   */
  constructor(fasterTenant: string) {
    this.baseUrl = `https://${fasterTenant}.fasterwebcloud.com/FASTER`
    this.loginUrl = `${this.baseUrl}/Login`

    /* Inventory */
    this.#inventorySearchUrl = `${this.baseUrl}/Domains/Parts/Search/Default.aspx?xact=False&type=False&str=`

    /* Maintenance */
    this.#workOrderSearchUrl = `${this.baseUrl}/Domains/Maintenance/WorkOrder/Search/Default.aspx?xact=False&type=False&str=`
    this.#workOrderUrl = `${this.baseUrl}/Domains/Maintenance/WorkOrder/WorkOrderMaster.aspx?workOrderID=`

    /* Reports */
    this.reportViewerUrl = `${this.baseUrl}/Domains/Reports/ReportViewer.aspx`
  }

  /**
   * Builds a URL for the inventory search.
   * @param searchString - Item number search string
   * @returns Inventory search URL
   */
  inventorySearchUrl(searchString = ''): string {
    return `${this.#inventorySearchUrl}${searchString}`
  }

  /**
   * Builds a URL for a given work order.
   * @param workOrderNumber - Work order number
   * @returns Work order URL
   */
  workOrderUrl(workOrderNumber: number | string): string {
    return `${this.#workOrderUrl}${workOrderNumber}`
  }

  /**
   * Builds a URL for the work order search.
   * @param searchString - Work order number or asset number search string
   * @returns Work order search URL
   */
  workOrderSearchUrl(searchString = ''): string {
    return `${this.#workOrderSearchUrl}${searchString}`
  }
}

export default FasterUrlBuilder
