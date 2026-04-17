export interface ApiUrlParameterMap {
    "autocomplete": {
        q: string;
    };
    "post": {
        user_id: number;
        api_key: string;
        tags?: string;
        id?: number;
        limit?: number;
        pid?: number;
        json?: 0 | 1;
        fields?: "tag_info";
    };
    "comment": {
        user_id: number;
        api_key: string;
        post_id?: number;
    };
    "tag": {
        id?: number;
        limit?: number;
    };
}
