export class EventType {
    constructor(public name: string) {}
}

export class Birthday extends EventType{
    constructor(name: string, public character: string) {
        super(name);
    }
}

export class Wedding extends EventType{
    constructor(name: string, public character: string) {
        super(name);
    }
}

export class Festival extends EventType{
    constructor(name: string, public character: string) {
        super(name);
    }
}

export class Concert extends EventType{
    constructor(name: string, public character: string) {
        super(name);
    }
}