export const formatString = (string: string, object: any): string =>
    string.replace(/\{\s*([\w.]+)\s*\}/g, (match, path) =>
        path.split(".").reduce((o, k) => o?.[k], object) ?? match
    );
