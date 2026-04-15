import FS from "node:fs/promises";
import { DOMParser } from "@xmldom/xmldom";

export const json = JSON.parse(
	await FS.readFile("./search.json", "utf8")
);
export const xml = new DOMParser().parseFromString(
	await FS.readFile("./search.xml", "utf8")
);
