/**
 * Represents a user for interacting with the AppSheet API.
 */
export class AppSheetUser {
  /**
   * Creates an instance of the AppSheetUser class.
   *
   * @param {string} idApp - The ID of the application.
   * @param {string} apiKey - The API key used for authentication.
   * @param {boolean} [format=true] - Specifies whether to format the data. Default is `true`.
   *  When `true`, specific data transformations will be applied (e.g., converting 'Y' to `true`).
   * @param {string} [region='global'] - The region for the AppSheet API endpoint. Defaults to 'global'.
   *  Possible values are 'global' (which maps to 'www.appsheet.com') or 'ue' (which maps to 'eu.appsheet.com').
   *
   * @throws {Error} Throws an error if `region` is not one of 'global' or 'ue'.
   */
  constructor(idApp, apiKey, format = true, region = 'global') {
    this.idApp = idApp
    this.apiKey = apiKey
    this.format = format

    const lowerRegion = region.toLowerCase()
    if (lowerRegion === 'global') {
      this.region = 'www.appsheet.com'
    } else if (lowerRegion === 'ue') {
      this.region = 'eu.appsheet.com'
    } else {
      throw new Error('Invalid region specified. Only "global" or "ue" are allowed.')
    }
  }
}
