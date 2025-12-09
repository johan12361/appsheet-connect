# AppSheet Connect

> ⚠️ **DEPRECATED**: This package has been deprecated. Please use [`appsheet-api`](https://www.npmjs.com/package/appsheet-api) instead.
>
> **Important**: The packages are **NOT compatible**. You will need to completely rewrite your code using the new API. There is no migration documentation available.

---

`appsheet-connect` is a library for interacting with the AppSheet API. It allows you to perform CRUD operations (create, read, update, and delete) on tables within AppSheet applications.

## Installation

To install the library, you can use npm:

```bash
npm install appsheet-connect
```

Or with yarn:

```bash
yarn add appsheet-connect
```

## Usage

### `AppSheetUser` Class

The `AppSheetUser` class represents a user for the AppSheet API and is used to authenticate requests.

#### Constructor

```typescript
constructor(
  idApp: string,
  apiKey: string,
  format?: boolean,
  region?: 'global' | 'ue'
)
```

- `idApp` (string): The application ID.
- `apiKey` (string): The API key used for authentication.
- `format` (boolean, optional): Specifies whether to format data information. Default is `true`. Examples: a value of `'Y'` will be converted to `true`, and a value of `'N'` will be converted to `false`.
- `region` ('global' | 'ue', optional): The region for the AppSheet API endpoint. Can be `'global'` (equivalent to `'www.appsheet.com'`) or `'ue'` (equivalent to `'eu.appsheet.com'`). Default is `'global'`.

#### Example

```typescript
import { AppSheetUser } from 'appsheet-connect'

const user = new AppSheetUser('my-app-id', 'my-api-key', true, 'ue')
```

### Functions

#### `getTable`

Retrieves data from a table in the AppSheet application.

```typescript
export function getTable(
  appSheetUser: AppSheetUser,
  tableId: string,
  rows?: object | object[] | null,
  properties?: Record<string, any>
): Promise<any>
```

- `appSheetUser` (AppSheetUser): Instance of `AppSheetUser` with authentication details and settings.
- `tableId` (string): The ID of the table from which to retrieve data.
- `rows` (object | object[] | null, optional): Filter criteria for the rows to retrieve. Can be an object, an array of objects, or `null` to retrieve all rows.
- `properties` (Record<string, any>, optional): Additional properties to include in the request.

#### `patchTable`

Updates data in a table in the AppSheet application.

```typescript
export function patchTable(
  appSheetUser: AppSheetUser,
  tableId: string,
  data: object | object[],
  properties?: Record<string, any>
): Promise<any>
```

- `appSheetUser` (AppSheetUser): Instance of `AppSheetUser` with authentication details and settings.
- `tableId` (string): The ID of the table to update.
- `data` (object | object[]): Data to update in the table. Can be an object or an array of objects.
- `properties` (Record<string, any>, optional): Additional properties to include in the request.

#### `deleteTable`

Deletes data from a table in the AppSheet application.

```typescript
export function deleteTable(
  appSheetUser: AppSheetUser,
  tableId: string,
  data: object | object[],
  properties?: Record<string, any>
): Promise<any>
```

- `appSheetUser` (AppSheetUser): Instance of `AppSheetUser` with authentication details and settings.
- `tableId` (string): The ID of the table from which to delete data.
- `data` (object | object[]): Data to delete from the table. Can be an object or an array of objects.
- `properties` (Record<string, any>, optional): Additional properties to include in the request.

#### `postTable`

Adds data to a table in the AppSheet application.

```typescript
export function postTable(
  appSheetUser: AppSheetUser,
  tableId: string,
  data: object | object[],
  properties?: Record<string, any>
): Promise<any>
```

- `appSheetUser` (AppSheetUser): Instance of `AppSheetUser` with authentication details and settings.
- `tableId` (string): The ID of the table to which to add data.
- `data` (object | object[]): Data to add to the table. Can be an object or an array of objects.
- `properties` (Record<string, any>, optional): Additional properties to include in the request.

## Contributing

Contributions are welcome. Please open an issue or a pull request on GitHub to discuss any changes or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for more details.
