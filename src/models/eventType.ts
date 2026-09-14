export class EventType {
    constructor(
        public name: string,
        public description?: string) { }
    
    getInfo(): string { 
        return `Event Type: ${this.name}${this.description ? ', Description: ' + this.description : ''}`;
    }
}

export class Birthday extends EventType{
    constructor(public character: string) {
        super("Születésnap");
    }
}

export class Wedding extends EventType{
    constructor(public character: string) {
        super("Esküvő");
    }
}

export class Festival extends EventType{
    constructor(public character: string) {
        super("Fesztivál");
    }
}

export class Concert extends EventType{
    constructor(public character: string) {
        super("Koncert");
    }
}