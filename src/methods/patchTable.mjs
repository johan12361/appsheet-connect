import { toObj } from '../format/toObj.mjs'

/**
 * Updates or edits rows in a specific table in the AppSheet application.
 *
 * @param {AppSheetUser} appSheetUser - An instance of the `AppSheetUser` class containing authentication details and settings.
 * @param {string} tableId - The ID of the table where rows will be updated.
 * @param {Object|Object[]} data - The data to be updated. Can be a single object, an array of objects, or `null` if no data is provided.
 * @param {Object} [properties={}] - Additional properties to be included in the request. Optional.
 *
 * @returns {Object[]|null} Returns an array of the updated rows if the request was successful; otherwise, returns `null`.
 *
 * @throws {Error} Throws an error if the request fails or if there is an issue with the provided parameters.
 *
 * @example
 * const appSheetUser = new AppSheetUser('myAppId', 'myApiKey', true, 'global');
 * const tableId = 'myTableId';
 * const data = { id: 1, name: 'Updated Name' };
 * const properties = { includeRelated: true };
 *
 * patchTable(appSheetUser, tableId, data, properties)
 *   .then(updatedRows => {
 *     console.log('Updated rows:', updatedRows);
 *   })
 *   .catch(error => {
 *     console.error('Error:', error);
 *   });
 */
export async function patchTable(appSheetUser, tableId, data, properties = {}) {
  const { idApp, apiKey, format, region } = appSheetUser
  const url = `https://${region}/api/v2/apps/${idApp}/tables/${tableId}/Action?applicationAccessKey=${apiKey}`
  const headers = {
    'Content-Type': 'application/json'
  }
  const rows = data !== null && typeof data === 'object' && !Array.isArray(data) ? [data] : data

  const body = {
    Action: 'Edit',
    Properties: properties,
    Rows: rows
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
    const data = format ? toObj(res.Rows) : res.Rows
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}
