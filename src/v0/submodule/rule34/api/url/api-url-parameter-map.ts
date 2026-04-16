export interface ApiUrlParameterMap {
    "autocomplete": {
        params: { q: string; };
        args: [];
    };
    "post": {
        params: {
            user_id: number;
            api_key: string;
            tags?: string;
            id?: number;
            limit?: number;
            pid?: number;
            json?: 0 | 1;
            fields?: "tag_info";
        };
        args: [ bothFormats?: boolean ];
    };
    "comment": {
        params: {
            user_id: number;
            api_key: string;
            post_id?: number;
        };
        args: [];
    };
    "tag": {
        params: {
            id?: number;
            limit?: number;
        };
        args: [];
    };
}
