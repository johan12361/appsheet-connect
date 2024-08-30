export class AppSheetUser {
  /**
   * Creates an instance of the AppSheetUser class.
   * @param {string} idApp - The ID of the application.
   * @param {string} apiKey - The API key used for authentication.
   * @param {boolean} [format=true] - Specifies the format for the data; default is true.
   * @param {string} [region='global'] - The region for the AppSheet API endpoint; defaults to 'global'.
   *
   * @throws {Error} Will throw an error if `region` is not 'global' or 'ue'.
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
