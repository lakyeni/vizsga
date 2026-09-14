import { Event } from "./models/event";
import { EventType } from "./models/eventType";
import { EventManager } from "./services/eventManager";
import { ParticipantManager } from "./services/participantManager";

const eventManager = new EventManager<Event>();
const participantManager = new ParticipantManager();

// Esemény létrehozása
const event1 = new Event(1, "Ádám születésnapja", new Date('2026-10-10'), "Budapest, Ferenciek tere", new EventType("Születésnap"), "Kovács Péter");
//Esemény hozzáadása 
eventManager.addEvent(event1);

const event2 = new Event(2, "Klau&Erik esküvője", new Date('2026-11-15'), "Etyek, Nap utca 22", new EventType("Esküvő"), "Kiss Fanni");
eventManager.addEvent(event2);

//esemény frissítése 
eventManager.updateEvent(event2, new Event(2, "Klau&Erik esküvője", new Date('2027-05-15'), "Etyek, Nap utca 22", new EventType("Esküvő"), "Kiss Fanni"));


const event3 = new Event(3, "Tisza-fesztivál", new Date('2027-08-20'), "Szeged, Dóm tér", new EventType("Fesztivál"), "Nagy László");

eventManager.addEvent(event3);

// Résztvevők hozzáadása az egyes eseményekhez
participantManager.addParticipant(event1, "Cserepes Virág", "cserepes.virag@example.com");
participantManager.addParticipant(event1, "Kiss Fanni", "kiss.fanni@example.com");
participantManager.addParticipant(event1, "Nagy László", "nagy.laszlo@example.com");

participantManager.addParticipant(event2, "Kovács Péter", "kovacs.peter@example.com");
participantManager.addParticipant(event2, "Nagy László", "nagy.laszlo@example.com");

participantManager.addParticipant(event3, "Kovács Péter", "kovacs.peter@example.com");
participantManager.addParticipant(event3, "Kiss Fanni", "kiss.fanni@example.com");
participantManager.addParticipant(event3, "Nagy László", "nagy.laszlo@example.com");

//Résztvevő törlése bizonyos eseményből
participantManager.removeParticipant(event1, 2); 

// Események listázása
eventManager.listEvents().forEach(event => {
    console.log(`ID: ${event.getId()}, Név: ${event.name}, Dátum: ${event.date.toDateString()}, Helyszín: ${event.location}, Típus: ${event.eventType.name}, Szervező: ${event.organizer}`);
});

//résztvevők listázása egy eseményhez
participantManager.listParticipants(event1).forEach(participant => {
    console.log(`Résztvevő ID: ${participant.id}, Név: ${participant.name}, Email: ${participant.email}`);
});

console.log("a program vége");