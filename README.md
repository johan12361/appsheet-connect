# Google Drive Downloader

`google-drive-downloader` is a library for interacting with Google Drive files. It includes functions to download files from Google Drive and extract file IDs from Google Drive URLs.

## Installation

To install the library, you can use npm:

```bash
npm install google-drive-downloader
```

Or with yarn:

```bash
yarn add google-drive-downloader
```

## Usage

### `getFileIdFromUrl`

Extracts the file ID from a Google Drive URL.

#### Parameters

- `url` (`string`): The Google Drive URL from which to extract the file ID.

#### Returns

- `string`: The extracted file ID.

#### Throws

- `Error` if the provided URL is not a valid string or if the file ID cannot be extracted from the URL.

#### Example

```javascript
import { getFileIdFromUrl } from 'google-drive-downloader';

const url = 'https://drive.google.com/file/d/1CwGEerIO-bunXA0e_yXySEmKNuSECytW/view?usp=sharing';
const fileId = getFileIdFromUrl(url);
console.log(fileId); // Outputs: 1CwGEerIO-bunXA0e_yXySEmKNuSECytW
```

### `downloadFile`

Downloads a file from Google Drive and saves it to the specified directory with a given filename and extension.

#### Parameters

- `fileId` (`string`): The ID of the file to download from Google Drive.
- `dirPath` (`string`): The directory path where the file should be saved.
- `filename` (`string`): The base name of the file (excluding the extension).
- `extension` (`string`): The file extension (e.g., 'pdf', 'jpg').

#### Returns

- `Promise<string | null>`: A promise that resolves to the full path of the saved file on success, or `null` if an error occurs.

#### Throws

- `Error` if the provided parameters are invalid or if an error occurs during the download or save process.

#### Example

```javascript
import { downloadFile } from 'google-drive-downloader';

const fileId = '1CwGEerIO-bunXA0e_yXySEmKNuSECytW';
const dirPath = './downloads';
const filename = 'myfile';
const extension = 'pdf';

downloadFile(fileId, dirPath, filename, extension)
  .then(filePath => console.log(`File downloaded and saved to: ${filePath}`))
  .catch(error => console.error('Download failed:', error));
```

## Contributing

Contributions are welcome. Please open an issue or a pull request on GitHub to discuss any changes or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
