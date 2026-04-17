import { resource } from "../../../../../util/resource.ts";
import { formatString } from "./format-string.ts";

const base = await resource("/embed/base.html");

export function renderEmbed(headers): string {
    const elements = typeof headers === "string"
        ? headers
        : [
            Object.entries(headers.meta)
                .map(([p, c]) => `<meta property="${p}" content="${c}" />`)
                .join(""),
            headers.link.map(i => `<link ${Object.entries(i)
                .map(([a, v]) => `${a}="${v}"`)
                .join(" ")
            } />`).join("")
        ].join("");
    
    return formatString(base, {
        head: elements,
        body: ""
    });
}
