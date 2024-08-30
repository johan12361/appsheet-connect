import { toObj } from '../format/toObj.mjs'

/**
 * Retrieves rows from a specific table in the AppSheet application.
 *
 * @param {AppSheetUser} appSheetUser - An instance of the `AppSheetUser` class containing authentication details and settings.
 * @param {string} tableId - The ID of the table from which rows should be retrieved.
 * @param {Object|Object[]|null} [rows=null] - The rows to be filtered. Can be a single object, an array of objects, or `null` to retrieve all rows.
 * @param {Object} [properties={}] - Additional properties to be included in the request. Optional.
 *
 * @returns {Object[]|null} Returns an array of the retrieved rows if the request was successful; otherwise, returns `null`.
 *
 * @throws {Error} Throws an error if the request fails or if there is an issue with the provided parameters.
 *
 * @example
 * const appSheetUser = new AppSheetUser('myAppId', 'myApiKey', true, 'global');
 * const tableId = 'myTableId';
 * const rows = { id: 1 };
 * const properties = { includeRelated: true };
 *
 * getTable(appSheetUser, tableId, rows, properties)
 *   .then(retrievedRows => {
 *     console.log('Retrieved rows:', retrievedRows);
 *   })
 *   .catch(error => {
 *     console.error('Error:', error);
 *   });
 */
export async function getTable(appSheetUser, tableId, rows = null, properties = {}) {
  const { idApp, apiKey, format, region } = appSheetUser
  const url = `https://${region}/api/v2/apps/${idApp}/tables/${tableId}/Action?applicationAccessKey=${apiKey}`
  const headers = {
    'Content-Type': 'application/json'
  }
  const filter = rows !== null && typeof rows === 'object' && !Array.isArray(rows) ? [rows] : rows

  const body = {
    Action: 'Find',
    Properties: properties,
    Rows: filter === null ? [] : filter
  }
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error(`Request failed: ${response.statusText}`)
    }
    const res = await response.json()
    const data = format ? toObj(res) : res
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}
