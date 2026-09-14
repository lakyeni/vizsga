import { EventType } from "./eventType";
import { Participant } from "./participant";

export interface IEvent {
    id: number;
    name: string;
    date: Date;
    location: string;
    eventType: EventType;
    participants: Participant[];
    organizer: string;
}

export class Event implements IEvent {
    id: number;
    participants: Participant[] = [];

    constructor(
        id: number,
        public name: string,
        public date: Date,
        public location: string,
        public eventType: EventType,
        public organizer: string
    ) {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }
}