import type { SimpleSearchIntersection } from "../../../types/simple-search-intersection.ts";

const tagCatMap = {
    "copyright": "copyright",
    "character": "character",
    "artist": "artist",
    "tag": "general",
    "metadata": "metadata",
    [null as any as "null"]: "ambiguous"
};

export const formatResults = (results: SimpleSearchIntersection) => ({
    count: results.count,
    results: results.results.map(i => {
        const tags = Object.fromEntries([
            "copyright", "character", "artist",
            "general", "metadata", "ambiguous"
        ].map(i => [ i, [] as { name: string; count: number; }[]]));

        i.tag_info.forEach(i =>
            tags[tagCatMap[i.type] as keyof typeof tags].push({
                name: i.tag,
                count: i.count
            })
        );

        return {
            id: i.id,
            createdAt: i.created_at,
            updatedAt: i.change,
            file: {
                main: {
                    url: i.file_url,
                    size: [ i.width, i.height ]
                },
                sample: {
                    has: i.sample,
                    url: i.sample_url,
                    size: [ i.sample_width, i.sample_height ]
                },
                preview: {
                    url: i.preview_url,
                    size: [ i.preview_width, i.preview_height ]
                },
                ext: i.image.match(/(?<=\.)[^.]*$/)[0],
                md5: i.hash,
                directory: i.directory
            },
            score: i.score,
            tags: tags,
            status: i.status,
            rating: i.xml_rating,
            source: i.source,
            relationships: {
                parentId: i.parent_id || null,
                hasChildren: i.has_children
            },
            uploader: {
                username: i.owner,
                id: i.creator_id
            },
            hasNotes: i.has_notes,
            commentCount: i.comment_count
        };
    })
});
