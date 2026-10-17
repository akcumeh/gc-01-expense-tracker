import { User } from "./User";

export interface Entry {
    id: string;
    author: User;
    type: "expense" | "income";
    category: "string";
    description: string;

}