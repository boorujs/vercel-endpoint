import { parseXml } from "./xml/parse-xml.ts";
import { xmlToObject } from "./xml/xml-to-object.ts";

export const fetchAndParse = {
    json: i => fetch(i).then(r => r.json()),
    xml: i => fetch(i).then(r => r.text()).then(t => xmlToObject(parseXml(t)))
};
