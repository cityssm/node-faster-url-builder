export type FasterBaseUrl = `https://${string}/FASTER`

/**
 * Tests if a base URL is valid.
 * @param fasterBaseUrl - A possible FASTER Web base URL.
 * @returns `true` if the base URL is valid.
 */
export function isValidBaseUrl(
  fasterBaseUrl: string
): fasterBaseUrl is FasterBaseUrl {
  return (
    fasterBaseUrl.startsWith('https://') && fasterBaseUrl.endsWith('/FASTER')
  )
}

export class FasterUrlBuilder {
  /** Base URL */
  readonly baseUrl: FasterBaseUrl

  /** Login URL */
  readonly loginUrl: `${FasterBaseUrl}/Login`

  readonly #inventorySearchUrl: `${FasterBaseUrl}/Domains/Parts/Search/Default.aspx?xact=False&type=False&str=`

  /** Inventory Item Request Search URL */
  readonly inventoryItemRequestSearchUrl: `${FasterBaseUrl}/Domains/Parts/PartRequest/PartsRequest.aspx`

  // eslint-disable-next-line no-secrets/no-secrets
  readonly #workOrderSearchUrl: `${FasterBaseUrl}/Domains/Maintenance/WorkOrder/Search/Default.aspx?xact=False&type=False&str=`
  readonly #workOrderUrl: `${FasterBaseUrl}/Domains/Maintenance/WorkOrder/WorkOrderMaster.aspx?workOrderID=`

  /** Report Viewer URL - Parameters required */
  readonly reportViewerUrl: `${FasterBaseUrl}/Domains/Reports/ReportViewer.aspx`

  /** Technician Workstation URL */
  readonly technicianWorkstationUrl: `${FasterBaseUrl}Tech`

  /**
   * Initializes the FasterUrlBuilder
   * @param fasterTenantOrBaseUrl - The subdomain of the FASTER Web URL before ".fasterwebcloud.com"
   *                                or the full domain and path including "/FASTER"
   */
  constructor(fasterTenantOrBaseUrl: string) {
    this.baseUrl = fasterTenantOrBaseUrl.startsWith('https://')
      ? (fasterTenantOrBaseUrl as FasterBaseUrl)
      : `https://${fasterTenantOrBaseUrl}.fasterwebcloud.com/FASTER`

    if (!isValidBaseUrl(this.baseUrl)) {
      throw new Error(`Invalid base URL: ${this.baseUrl as string}`)
    }

    this.loginUrl = `${this.baseUrl}/Login`

    /* Inventory */
    this.#inventorySearchUrl = `${this.baseUrl}/Domains/Parts/Search/Default.aspx?xact=False&type=False&str=`
    this.inventoryItemRequestSearchUrl = `${this.baseUrl}/Domains/Parts/PartRequest/PartsRequest.aspx`

    /* Maintenance */
    // eslint-disable-next-line no-secrets/no-secrets
    this.#workOrderSearchUrl = `${this.baseUrl}/Domains/Maintenance/WorkOrder/Search/Default.aspx?xact=False&type=False&str=`
    this.#workOrderUrl = `${this.baseUrl}/Domains/Maintenance/WorkOrder/WorkOrderMaster.aspx?workOrderID=`

    /* Reports */
    this.reportViewerUrl = `${this.baseUrl}/Domains/Reports/ReportViewer.aspx`

    /* Technician Workstation */
    this.technicianWorkstationUrl = `${this.baseUrl}Tech`
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
