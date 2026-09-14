import { Event } from "../models/event";
import { Participant } from "../models/participant";

export class ParticipantManager {
    private participants: Map<number, Participant> = new Map();
    private nextId: number = 1;

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

        return participant;
    }

    removeParticipant(event: Event, participantId: number): void {
        const index = event.participants.findIndex(
            participant => participant.id === participantId
        );

        if (index === -1) {
            throw new Error(`A résztvevő nem található az eseményen!`);
        }

        const participant = event.participants[index]!;

        console.log(`Résztvevő törölve: ${participant.name} (${participant.email})`);
        event.participants.splice(index, 1);
    }

    listParticipants(event: Event): Participant[] {
        return event.participants;
    }
}
