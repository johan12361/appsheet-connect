# AppSheet Connect ES

`appsheet-connect` es una biblioteca para interactuar con la API de AppSheet. Permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) en tablas dentro de aplicaciones AppSheet.

## Instalación

Para instalar la biblioteca, puedes usar npm:

```bash
npm install appsheet-connect
```

O con yarn:

```bash
yarn add appsheet-connect
```

## Uso

### Clase `AppSheetUser`

La clase `AppSheetUser` representa un usuario para la API de AppSheet y se utiliza para autenticar las solicitudes.

#### Constructor

```typescript
constructor(
  idApp: string,
  apiKey: string,
  format?: boolean,
  region?: 'global' | 'ue'
)
```

- `idApp` (string): El ID de la aplicación.
- `apiKey` (string): La clave API utilizada para la autenticación.
- `format` (boolean, opcional): Especifica si se debe formatear la información de datos. Por defecto es `true`. Ejemplos: un valor de `'Y'` se convertirá en `true`, y un valor de `'N'` se convertirá en `false`.
- `region` ('global' | 'ue', opcional): La región para el endpoint de la API de AppSheet. Puede ser `'global'` (equivalente a `'www.appsheet.com'`) o `'ue'` (equivalente a `'eu.appsheet.com'`). Por defecto es `'global'`.

#### Ejemplo

```typescript
import { AppSheetUser } from 'appsheet-connect'

const user = new AppSheetUser('my-app-id', 'my-api-key', true, 'ue')
```

### Funciones

#### `getTable`

Obtiene datos de una tabla en la aplicación AppSheet.

```typescript
export function getTable(
  appSheetUser: AppSheetUser,
  tableId: string,
  rows?: object | object[] | null,
  properties?: Record<string, any>
): Promise<any>
```

- `appSheetUser` (AppSheetUser): Instancia de `AppSheetUser` con detalles de autenticación y configuración.
- `tableId` (string): El ID de la tabla desde la que se deben obtener los datos.
- `rows` (object | object[] | null, opcional): Criterios de filtro para las filas a obtener. Puede ser un objeto, un array de objetos o `null` para obtener todas las filas.
- `properties` (Record<string, any>, opcional): Propiedades adicionales para incluir en la solicitud.

#### `patchTable`

Actualiza datos en una tabla en la aplicación AppSheet.

```typescript
export function patchTable(
  appSheetUser: AppSheetUser,
  tableId: string,
  data: object | object[],
  properties?: Record<string, any>
): Promise<any>
```

- `appSheetUser` (AppSheetUser): Instancia de `AppSheetUser` con detalles de autenticación y configuración.
- `tableId` (string): El ID de la tabla a actualizar.
- `data` (object | object[]): Datos para actualizar en la tabla. Puede ser un objeto o un array de objetos.
- `properties` (Record<string, any>, opcional): Propiedades adicionales para incluir en la solicitud.

#### `deleteTable`

Elimina datos de una tabla en la aplicación AppSheet.

```typescript
export function deleteTable(
  appSheetUser: AppSheetUser,
  tableId: string,
  data: object | object[],
  properties?: Record<string, any>
): Promise<any>
```

- `appSheetUser` (AppSheetUser): Instancia de `AppSheetUser` con detalles de autenticación y configuración.
- `tableId` (string): El ID de la tabla de la que se deben eliminar los datos.
- `data` (object | object[]): Datos para eliminar de la tabla. Puede ser un objeto o un array de objetos.
- `properties` (Record<string, any>, opcional): Propiedades adicionales para incluir en la solicitud.

#### `postTable`

Agrega datos a una tabla en la aplicación AppSheet.

```typescript
export function postTable(
  appSheetUser: AppSheetUser,
  tableId: string,
  data: object | object[],
  properties?: Record<string, any>
): Promise<any>
```

- `appSheetUser` (AppSheetUser): Instancia de `AppSheetUser` con detalles de autenticación y configuración.
- `tableId` (string): El ID de la tabla a la que se deben agregar los datos.
- `data` (object | object[]): Datos para agregar a la tabla. Puede ser un objeto o un array de objetos.
- `properties` (Record<string, any>, opcional): Propiedades adicionales para incluir en la solicitud.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un problema o una solicitud de extracción en GitHub para discutir cualquier cambio o mejora.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE.md) para obtener más detalles.
