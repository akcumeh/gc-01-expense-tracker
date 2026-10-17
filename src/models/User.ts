import { Entry } from "./Entry";

export interface User {
    id: string;
    // name: string;
    username: string;
    email: string;
    password: string;
    created_at: string;
    entries: [Entry];
};