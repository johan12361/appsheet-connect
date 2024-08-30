/**
 * Main entry point for the AppSheet API library.
 *
 * This module exports functions for interacting with AppSheet tables,
 * as well as a class for managing user credentials and configuration.
 *
 * @module AppSheetAPI
 */
import { AppSheetUser } from './src/config/user.mjs'
import { getTable } from './src/methods/getTable.mjs'
import { patchTable } from './src/methods/patchTable.mjs'
import { deleteTable } from './src/methods/deleteTable.mjs'
import { postTable } from './src/methods/postTable.mjs'

export { getTable, patchTable, deleteTable, postTable, AppSheetUser }
