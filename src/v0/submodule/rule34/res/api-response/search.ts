import { DOMParser } from "@xmldom/xmldom";

const jsonUrl = "https://github.com/boorujs/booru.js/raw/refs/tags/v0.0.1/.brainstorm/rule34.xxx/responses/formatted/search.json";
const xmlUrl =  "https://github.com/boorujs/booru.js/raw/refs/tags/v0.0.1/.brainstorm/rule34.xxx/responses/formatted/search.xml";

export const json = await fetch(jsonUrl).then(r => r.json());
export const xml = await fetch(xmlUrl).then(r => r.text())
	.then(t => new DOMParser().parseFromString(t));
