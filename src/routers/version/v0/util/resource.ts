export async function resource(path: string): Promise<string> {
    const base = "https://boorujs.github.io/vercel-endpoint/";
    const url = (base + path).replace(/\/{2,}/g, "/");
    return await fetch(url).then(r => r.text());
}
