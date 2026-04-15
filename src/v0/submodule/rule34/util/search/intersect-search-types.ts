import type { RawSearchIntersection } from "../../types/raw-search-intersection.ts";

export const intersectSearchTypes = (json, xml): RawSearchIntersection => ({
    count: xml.documentElement.getAttribute("count"),
    offset: xml.documentElement.getAttribute("offset"),
    results: json.map((_, i) => ({
        json: json[i],
        xml: Array.from(xml.documentElement.children[i].attributes)
            .reduce((obj, i) => obj[i.name] = i.value, {})
    }))
});
