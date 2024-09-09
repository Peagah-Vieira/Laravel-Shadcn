export interface User {
    id: number;
    name: string;
    email: string;
    created_at: Date;
    updated_at: Date;
    email_verified_at?: string;
}
export interface Category {
    id: number;
    category_name: string;
    created_at: Date;
    updated_at: Date;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
