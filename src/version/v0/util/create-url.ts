const nullish = Symbol("nullish");

export function createUrl({ base, path = [], params = {} }: {
    base: string,
    path: string[],
    params: Record<any, any>
}): string {
    const url =
        base.replace(/\/?$/, "/") +
        path.join("/") +
        (Object.keys(params).length
            ? "?" + new URLSearchParams(
                Object.entries(params)
                .filter(([ _, value ]) => (value ?? nullish) !== nullish)
            ).toString()
            : "");

    return url;
}
