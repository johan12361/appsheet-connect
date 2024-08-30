import { toObj } from '../format/toObj.mjs'

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
      throw new Error(`Error en la solicitud: ${response.statusText}`)
    }
    const res = await response.json()
    const data = format ? toObj(res) : res
    console.log('Datos de la tabla:', data)
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}
