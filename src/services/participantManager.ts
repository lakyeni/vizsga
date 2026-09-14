import { Event } from "../models/event";
import { Participant } from "../models/participant";

export class ParticipantManager {
    private participants: Map<number, Participant> = new Map();
    private nextId: number = 1;

    // Résztvevő hozzáadása egy eseményhez
    addParticipant(
        event: Event,
        name: string,
        email: string
    ): Participant {

        const participant: Participant = {
            id: this.nextId++,
            name,
            email
        };

        this.participants.set(participant.id, participant);
        event.participants.push(participant);
        console.log(`Résztvevő hozzáadva: ${participant.name} (${participant.email}) ehhez az eseményhez: ${event.name}`);
        return participant;
    }

    //Részvevő frissítése egy eseményben
    updateParticipant(event: Event, participantId: number, newName: string, newEmail: string): Participant {
        const participant = event.participants.find(
            participant => participant.id === participantId
        );

        if (!participant) {
            throw new Error(`A résztvevő nem található az eseményen!`);
        }

        participant.name = newName;
        participant.email = newEmail;
        console.log(`Résztvevő frissítve: ${participant.name} (${participant.email}) az eseményben: ${event.name}`);
        return participant;
    }

    
    // Résztvevő törlése egy eseményből
    removeParticipant(event: Event, participantId: number): void {
        const index = event.participants.findIndex(
            participant => participant.id === participantId
        );
        
        if (index === -1) {
            throw new Error(`A résztvevő nem található az eseményen!`);
        }
        
        const participant = event.participants[index]!;
        
        console.log(`Résztvevő törölve: ${participant.name} (${participant.email}) az eseményből: ${event.name}`);
        event.participants.splice(index, 1);
    }

    // Résztvevők listázása egy eseményhez
    listParticipants(event: Event): Participant[] {
        return event.participants;
    }


}
