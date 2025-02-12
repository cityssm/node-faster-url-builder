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

  readonly #inventorySearchUrl: `${FasterBaseUrl}/Domains/Parts/Search/Default.aspx`

  /** Inventory Item Request Search URL */
  readonly inventoryItemRequestSearchUrl: `${FasterBaseUrl}/Domains/Parts/PartRequest/PartsRequest.aspx`

  readonly #itemUrl: `${FasterBaseUrl}/Domains/Parts/PartDetail/Default.aspx?id=`

  readonly #workOrderSearchUrl: `${FasterBaseUrl}/Domains/Maintenance/WorkOrder/Search/Default.aspx`
  readonly #workOrderUrl: `${FasterBaseUrl}/Domains/Maintenance/WorkOrder/WorkOrderMaster.aspx?workOrderID=`

  /** Report Viewer URL - Parameters required */
  readonly reportViewerUrl: `${FasterBaseUrl}/Domains/Reports/ReportViewer.aspx`

  /** Scheduled Reports URL */
  readonly scheduledReportsUrl: `${FasterBaseUrl}/Domains/Reports/Schedule.aspx`

  /** Integrations Console URL */
  readonly integrationsUrl: `${FasterBaseUrl}/Domains/Integrations/Default.aspx`

  /** Technician Workstation URL */
  readonly technicianWorkstationUrl: `${FasterBaseUrl}Tech`

  /**
   * Initializes the FasterUrlBuilder
   * @param fasterTenantOrBaseUrl - The subdomain of the FASTER Web URL before ".fasterwebcloud.com"
   *                                or the full domain and path including "/FASTER"
   */
  constructor(fasterTenantOrBaseUrl: string) {
    this.baseUrl = fasterTenantOrBaseUrl.startsWith('https://')
      ? // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
        (fasterTenantOrBaseUrl as FasterBaseUrl)
      : `https://${fasterTenantOrBaseUrl}.fasterwebcloud.com/FASTER`

    if (!isValidBaseUrl(this.baseUrl)) {
      throw new Error(`Invalid base URL: ${this.baseUrl as string}`)
    }

    this.loginUrl = `${this.baseUrl}/Login`

    /* Inventory */
    this.#inventorySearchUrl = `${this.baseUrl}/Domains/Parts/Search/Default.aspx`
    this.inventoryItemRequestSearchUrl = `${this.baseUrl}/Domains/Parts/PartRequest/PartsRequest.aspx`
    this.#itemUrl = `${this.baseUrl}/Domains/Parts/PartDetail/Default.aspx?id=`

    /* Maintenance */
    this.#workOrderSearchUrl = `${this.baseUrl}/Domains/Maintenance/WorkOrder/Search/Default.aspx`
    this.#workOrderUrl = `${this.baseUrl}/Domains/Maintenance/WorkOrder/WorkOrderMaster.aspx?workOrderID=`

    /* Reports */
    this.reportViewerUrl = `${this.baseUrl}/Domains/Reports/ReportViewer.aspx`
    this.scheduledReportsUrl = `${this.baseUrl}/Domains/Reports/Schedule.aspx`

    /* Integrations */
    this.integrationsUrl = `${this.baseUrl}/Domains/Integrations/Default.aspx`

    /* Technician Workstation */
    this.technicianWorkstationUrl = `${this.baseUrl}Tech`
  }

  /**
   * Builds a URL for the inventory search.
   * @param searchString - Item number search string
   * @param exactMatch - `true` for exact match search
   * @returns Inventory search URL
   */
  inventorySearchUrl(searchString = '', exactMatch = false): string {
    return `${this.#inventorySearchUrl}?xact=${exactMatch ? 'True' : 'False'}&str=${searchString}`
  }

  /**
   * Builds a URL for a given item.
   * @param itemId - Item ID. This is not the item number.
   * @returns Item URL
   */
  itemUrl(itemId: number | string): string {
    return `${this.#itemUrl}${itemId}`
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
   * @param exactMatch - `true` for exact match search
   * @returns Work order search URL
   */
  workOrderSearchUrl(searchString = '', exactMatch = false): string {
    return `${this.#workOrderSearchUrl}?xact=${exactMatch ? 'True' : 'False'}&str=${searchString}`
  }
}

export default FasterUrlBuilder
