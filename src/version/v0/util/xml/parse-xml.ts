import { DOMParser } from "@xmldom/xmldom";

const parser = new DOMParser();
export const parseXml = (document: string) =>
    parser.parseFromString(document, "text/xml");
