// index.d.ts
declare module 'appsheet-connect' {
  /**
   * Represents a user for the AppSheet API.
   */
  export class AppSheetUser {
    /**
     * Creates an instance of the AppSheetUser class.
     *
     * @param idApp - The ID of the application.
     * @param apiKey - The API key used for authentication.
     * @param format - Specifies whether to format the data. Defaults to `true`.
     *  For example, a value of 'Y' will be converted to `true`, and a value of 'N' will be converted to `false`.
     * @param region - The region for the AppSheet API endpoint. Defaults to 'global'.
     *  Possible values are 'global' (maps to 'www.appsheet.com') or 'ue' (maps to 'eu.appsheet.com').
     *
     * @throws Error Will throw an error if `region` is not 'global' or 'ue'.
     */
    constructor(idApp: string, apiKey: string, format?: boolean, region?: 'global' | 'ue')

    idApp: string
    apiKey: string
    format: boolean
    region: 'www.appsheet.com' | 'eu.appsheet.com'
  }

  /**
   * Fetches data from a table in the AppSheet application.
   *
   * @param appSheetUser - An instance of `AppSheetUser` containing authentication details and configuration.
   * @param tableId - The ID of the table to fetch data from.
   * @param rows - Optional. Filter criteria for the rows to fetch. Should be an object, an array of objects, or `null` to fetch all rows.
   * @param properties - Optional. Additional properties to include in the request.
   * @returns A Promise that resolves to the data fetched from the table, or `null` if an error occurred.
   */
  export function getTable(
    appSheetUser: AppSheetUser,
    tableId: string,
    rows?: object | object[] | null,
    properties?: Record<string, any>
  ): Promise<any>

  /**
   * Updates data in a table in the AppSheet application.
   *
   * @param appSheetUser - An instance of `AppSheetUser` containing authentication details and configuration.
   * @param tableId - The ID of the table to update.
   * @param data - Data to update in the table. Should be an object or an array of objects.
   * @param properties - Optional. Additional properties to include in the request.
   * @returns A Promise that resolves to the updated data from the table, or `null` if an error occurred.
   */
  export function patchTable(
    appSheetUser: AppSheetUser,
    tableId: string,
    data: object | object[],
    properties?: Record<string, any>
  ): Promise<any>

  /**
   * Deletes data from a table in the AppSheet application.
   *
   * @param appSheetUser - An instance of `AppSheetUser` containing authentication details and configuration.
   * @param tableId - The ID of the table from which to delete data.
   * @param data - Data to delete from the table. Should be an object or an array of objects.
   * @param properties - Optional. Additional properties to include in the request.
   * @returns A Promise that resolves to the deleted data from the table, or `null` if an error occurred.
   */
  export function deleteTable(
    appSheetUser: AppSheetUser,
    tableId: string,
    data: object | object[],
    properties?: Record<string, any>
  ): Promise<any>

  /**
   * Adds data to a table in the AppSheet application.
   *
   * @param appSheetUser - An instance of `AppSheetUser` containing authentication details and configuration.
   * @param tableId - The ID of the table to add data to.
   * @param data - Data to add to the table. Should be an object or an array of objects.
   * @param properties - Optional. Additional properties to include in the request.
   * @returns A Promise that resolves to the added data from the table, or `null` if an error occurred.
   */
  export function postTable(
    appSheetUser: AppSheetUser,
    tableId: string,
    data: object | object[],
    properties?: Record<string, any>
  ): Promise<any>
}
