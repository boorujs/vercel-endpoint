export interface RawSearchIntersection {
    count: string;
    offset: string;
    results: {
        json: {
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
        };
        xml: {
            height: `${number}`;
            score: `${number}`;
            file_url: string;
            parent_id: `${number}` | "";
            sample_url: string;
            sample_width: `${number}`;
            sample_height: `${number}`;
            preview_url: string;
            rating: "s" | "q" | "e";
            tags: string;
            id: `${number}`;
            width: `${number}`;
            change: `${number}`;
            md5: string;
            creator_id: `${number}`;
            has_children: `${boolean}`;
            created_at: string;
            status: "active" | "flagged" | "deleted";
            source: string;
            has_notes: `${boolean}`;
            has_comments: `${boolean}`;
            preview_width: `${number}`;
            preview_height: `${number}`;
        };
    }[];
}
