/**
 * Main entry point for the AppSheet API library.
 *
 * This module exports functions for interacting with AppSheet tables,
 * as well as a class for managing user credentials and configuration.
 *
 * @module AppSheetAPI
 */
import { AppSheetUser } from './config/user.mjs'
import { getTable } from './methods/getTable.mjs'
import { patchTable } from './methods/patchTable.mjs'
import { deleteTable } from './methods/deleteTable.mjs'
import { postTable } from './methods/postTable.mjs'

export { getTable, patchTable, deleteTable, postTable, AppSheetUser }
