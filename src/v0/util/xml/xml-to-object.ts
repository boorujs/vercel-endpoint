import type { Document, Node } from "@xmldom/xmldom";

export let xmlToObject = (xml: Document) => convert(xml.documentElement);

let convert = (node: Node) => ({
    name: node.nodeName,
    attr: Object.fromEntries(
        Array.from(node.attributes)
        .map(i => [ i.name, i.value ])
    ),
    children: Array.from(node.children).map(convert)
});
