import type { SearchIntersection } from "../../types/search-intersection.ts";
import type { SimpleSearchIntersection } from "../../types/simple-search-intersection.ts";

export const intersectSearchTypes = (json, xml): SearchIntersection => ({
    count: xml.documentElement.getAttribute("count"),
    offset: xml.documentElement.getAttribute("offset"),
    results: json.map((_, i) => ({
        json: json[i],
        xml: Array.from(xml.documentElement.children[i].attributes)
            .reduce((obj, i) => obj[i.name] = i.value, {})
    })),
    simplify(): SimpleSearchIntersection { return {
        count: parseInt(this.count),
        offset: parseInt(this.offset),
        results: this.results.map(({json, xml}) => ({
            ...json,
            xml_rating: xml.rating,
            creator_id: parseInt(xml.creator_id),
            has_children: xml.has_children === "true",
            created_at: Date.parse(xml.created_at) / 1000,
            preview_width: parseInt(xml.preview_width),
            preview_height: parseInt(xml.preview_height)
        }))
    };}
});
