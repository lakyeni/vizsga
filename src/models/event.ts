import { EventType } from "./eventType";

export interface Event {
    id: number;
    name: string;
    organizer: string;
    eventType: EventType;
}