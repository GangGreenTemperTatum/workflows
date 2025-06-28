import { type BytesInput, type Data, type SDK } from "caido:workflow";

/**
 * @param {BytesInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data>}
 */

function addSlashes(str: string): string {
  return str.replace(/([\\'\"])/g, "\\$1");
}

export function run(input: BytesInput, sdk: SDK): MaybePromise<Data> {
  const parsed = sdk.asString(input);
  return addSlashes(parsed);
}
