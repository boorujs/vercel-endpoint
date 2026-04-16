import { createUrl } from "../../../../util/create-url.ts";
import type { ApiUrlParameterMap } from "./api-url-parameter-map.ts";

const BASE_URL = "https://api.rule34.xxx/";

let getUrl = (
    s: string,
    params: Parameters<typeof createUrl>[0]["params"]!
) => createUrl({
    base: BASE_URL,
    params: {
        page: "dapi",
        q: "index",
        s: s,
        ...params
    }
});

export function apiUrl<S extends keyof ApiUrlParameterMap>(
    s: S,
    params: ApiUrlParameterMap[S]
): string {
    switch (s) {
        case "autocomplete": return createUrl({
            base: BASE_URL,
            path: [ "autocomplete.php" ],
            params: params
        });
        case "post":
        case "comment":
        default:
            return getUrl(s, params);
    }
}
