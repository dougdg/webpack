/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DllPlugin {
	/**
	 * Context of requests in the manifest file (defaults to the webpack context)
	 */
	context?: string;
	/**
	 * Name of the exposed dll function (external name, use value of 'output.library')
	 */
	name?: string;
	/**
	 * Type of the dll bundle (external type, use value of 'output.libraryTarget')
	 */
	type?: string;
	/**
	 * Absolute path to the manifest json file (output)
	 */
	path: string;
}
