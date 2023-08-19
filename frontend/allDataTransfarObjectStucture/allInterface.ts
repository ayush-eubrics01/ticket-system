import { Topic } from "./allEnums";

export interface Data {
    email: string;
    subject: string;
    topic: keyof typeof Topic;
    description: string;
}