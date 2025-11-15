import { parse } from 'jsonc-parser';

/**
 * Parses Sky data from a JSONC string.
 * To resolve references, use `resolveSkyData` after parsing.
*/
export function parseSkyData(json: string): void {
  return parse(json, undefined, {
    disallowComments: false,
    allowEmptyContent: false,
    allowTrailingComma: true
  });
}

/**
 * Resolves all references in the Sky data object.
 * The object is modified in-place.
 * @param data - The Sky data object to resolve.
 */
export function resolveSkyData(data: any): void {
  console.log('TODO');
}
