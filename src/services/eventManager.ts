import { Event } from "../models/event";
import { EventType } from "../models/eventType";

export class EventManager<T extends Event> {
    private events: Map<number, T> = new Map();

    addEvent(event: T): void {
        this.events.set(event.getId(), event);
    }

    updateEvent(oldEvent: T, newEvent: T): void {
        this.events.set(oldEvent.getId(), newEvent);
    }

    removeEvent(event: T): void {
        this.events.delete(event.getId());
    }

    listEvents(): T[] {
        return Array.from(this.events.values());
    }

    getEventsByType(type: EventType): T[] {
        return Array.from(this.events.values()).filter(event => event.eventType.name === type.name);
    }
}