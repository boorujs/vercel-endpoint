export interface SimpleSearchIntersection {
    count: number;
    offset: number;
    results: {
        preview_url: string;
        sample_url: string;
        file_url: string;
        directory: number;
        hash: string;
        width: number;
        height: number;
        id: number;
        image: string;
        change: number;
        owner: string;
        parent_id: number;
        rating: "safe" | "questionable" | "explicit";
        sample: boolean;
        sample_height: number;
        sample_width: number;
        score: number;
        tags: string;
        source: string;
        status: "active" | "flagged" | "deleted";
        has_notes: boolean;
        comment_count: number;
        tag_info: {
            count: number;
            type:
                | "copyright"
                | "character"
                | "artist"
                | "tag"
                | "metadata"
                | null;
            tag: string;
        }[];
        xml_rating: "s" | "q" | "e";
        creator_id: number;
        has_children: boolean;
        created_at: number;
        preview_width: number;
        preview_height: number;
    }[];
}
