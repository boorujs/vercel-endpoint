import type { SimpleSearchIntersection } from "../../../types/simple-search-intersection.ts";

export const formatResults = (json, xml) => ({
    count: parseInt(xml.attr.count),
    results: json.map((_, i) => {
        const j = json[i];
        const x = xml.children[i].attr;
        return {
            id: j.id,
            createdAt: Date.parse(x.created_at) / 1000,
            updatedAt: j.change,
            file: {
                main: {
                    url: j.file_url,
                    size: [ j.width, j.height ]
                },
                sample: {
                    has: j.sample,
                    url: j.sample_url,
                    size: [ j.sample_width, j.sample_height ]
                },
                preview: {
                    url: j.preview_url,
                    size: [ x.preview_width, x.preview_height ]
                        .map(i => parseInt(i))
                },
                ext: j.image.match(/(?<=\.)[^.]*$/)![0],
                md5: j.hash,
                directory: j.directory
            },
            score: j.score,
            tags: formatTags(j.tag_info),
            status: j.status,
            rating: x.rating,
            source: j.source,
            relationships: {
                parentId: j.parent_id || null,
                hasChildren: x.has_children === "true"
            },
            uploader: {
                username: j.owner,
                id: parseInt(x.creator_id)
            },
            hasNotes: j.has_notes,
            commentCount: j.comment_count
        };
    })
});

const tagCatMap = new Map();
tagCatMap.set("copyright", "copyright");
tagCatMap.set("character", "character");
tagCatMap.set("artist",    "artist"   );
tagCatMap.set("tag",       "general"  );
tagCatMap.set("metadata",  "metadata" );
tagCatMap.set(null,        "ambiguous");

function formatTags(
    tags: SimpleSearchIntersection["results"][number]["tag_info"]
) {
    const formatted = Object.fromEntries(
        Array.from(tagCatMap.values()).map(i => [ i, [] ])
    );

    tags.forEach(i => formatted[tagCatMap.get(i.type)].push({
        name: i.tag,
        count: i.count
    }));

    return formatted;
}

