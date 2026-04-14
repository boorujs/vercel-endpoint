const nullish = Symbol("nullish");

export function createUrl(
    base: string,
    path: string[] = [],
    params: Record<any, any> = {}
): string {
    base = base.replace(/\/?$/, "/");
    path = path.join("/");
    params = new URLSearchParams(
        Object.entries(params)
        .filter(([ _, value ]) => (value ?? nullish) !== nullish)
    ).toString();

    return [ base, path, params ? `?${params}` : "" ].join("");
}
