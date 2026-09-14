import { Event } from "../models/event";
import { EventType } from "../models/eventType";
import { EventManager } from "../services/eventManager";

describe("EventManager", () => {

    let eventManager: EventManager<Event>;

    beforeEach(() => {
        eventManager = new EventManager<Event>();
    });

    test("esemény hozzáadása", () => {
        const event = new Event(1, "Teszt születésnap", new Date('2026-09-14'), "Valahol", new EventType("Születésnap"), "Kukor Ica");

        eventManager.addEvent(event);
        
        expect(eventManager.listEvents()).toHaveLength(1);
        expect(eventManager.listEvents()[0]).toBe(event);
    })

    test("esemény törlése", () => {
        const event = new Event(1, "Teszt születésnap", new Date('2026-09-14'), "Valahol", new EventType("Születésnap"), "Kukor Ica");
        eventManager.addEvent(event);
        eventManager.removeEvent(event);
        expect(eventManager.listEvents()).toHaveLength(0);  
    })

    test("aszinkron esemény létrehozása", async () => {
        const event = new Event(2, "Teszt async esemény", new Date('2026-09-14'), "Valahol", new EventType("Koncert"), "Laky Enikő");
        
        await eventManager.createEventAsync(event);

        expect(eventManager.listEvents()).toHaveLength(1);

    })
    })