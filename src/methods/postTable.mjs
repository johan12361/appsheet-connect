import { toObj } from '../format/toObj.mjs'

export async function postTable(appSheetUser, tableId, data, properties = {}) {
  const { idApp, apiKey, format, region } = appSheetUser
  const url = `https://${region}/api/v2/apps/${idApp}/tables/${tableId}/Action?applicationAccessKey=${apiKey}`
  const headers = {
    'Content-Type': 'application/json'
  }
  const rows = data !== null && typeof data === 'object' && !Array.isArray(data) ? [data] : data

  const body = {
    Action: 'Add',
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
      throw new Error(`Error en la solicitud: ${response.statusText}`)
    }
    const res = await response.json()
    const data = format ? toObj(res.Rows) : res.Rows
    console.log('Datos de la tabla:', data)
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}
