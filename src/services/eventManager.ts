import { LogClass, LogMethod } from "../decorators/log.decorators";
import { Event } from "../models/event";

@LogClass
export class EventManager<T extends Event> {
    private events: Map<number, T> = new Map();

    // esemény hozzáadása
@LogMethod
    addEvent(event: T): void {
        this.events.set(event.getId(), event);
    
        console.log(`Esemény hozzáadva: ${event.name} | Dátum: ${event.date.toDateString()} | Helyszín: ${event.location} | Típus: ${event.eventType.name} | Szervező: ${event.organizer}`);
    }

    // esemény frissítése
    updateEvent(oldEvent: T, newEvent: T): T {
        if (!this.events.has(oldEvent.getId())) {
            throw new Error(`Az esemény nem található!`);
        }
        this.events.set(oldEvent.getId(), newEvent);
        console.log(`Esemény frissítve: ${newEvent.name}, új dátum: ${newEvent.date.toDateString()}`);
        return newEvent;
    }

    //esemény törlése
    removeEvent(event: T): void {
        this.events.delete(event.getId());
        console.log(`Esemény törölve: ${event.name}`);
    }

    //események listázása
    listEvents(): T[] {
        return Array.from(this.events.values());
    }

    // események lekérdezése típus szerint
    getEventsByType(typeName: string): T[] {
        return Array.from(this.events.values()).filter(event => event.eventType.name === typeName);
    }

    // események lekérdezése dátum szerint
    getEventsByDate(date: Date): T[] {
        return Array.from(this.events.values()).filter(event => event.date.toDateString() === date.toDateString());
    }

    // események lekérdezése helyszín szerint
    getEventsByLocation(location: string): T[] {
        return Array.from(this.events.values()).filter(event => event.location === location);
    }

    // események lekérdezése szervező szerint
    getEventsByOrganizer(organizer: string): T[] {
        return Array.from(this.events.values()).filter(event => event.organizer === organizer);
    }

    // események lekérdezése típus szerint csoportosítva
    getEventsGroupedByType(): Map<string, T[]> {
        const groupedEvents = new Map<string, T[]>();
        for (const event of this.events.values()) {
            const typeName = event.eventType.name;
            if (!groupedEvents.has(typeName)) {
                groupedEvents.set(typeName, []);
            }
            groupedEvents.get(typeName)!.push(event);
        }
        return groupedEvents;
    }

    async createEventAsync(event: T): Promise<void> {
        try {
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    this.addEvent(event);
                    resolve();
                }, 1000);
            });
            this.addEvent(event);
        } catch (error) {
            console.error("Hiba történt az esemény létrehozása során:", error);
            throw error;
        }
    }
}   