const MessageEvent = {
    System: "system",
    Message: "message"
};

class EventMessage {
    constructor(from, type, value) {
        this.from = from;
        this.type = type;
        this.value = value;
    }
}

class MessageEventNotifier {
    constructor() {
        /*let port = window.location.port;*/
        let port = 4000;
        const protocol = window.location.protocol === "http:" ? "ws" : "wss";
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

        this.socket.onopen = (event) => {
            this.receiveEvent(new EventMessage("Startup", MessageEvent.System, { msg: "connected" }));
        };

        this.socket.onclose = (event) => {
        }
    }

    broadcastEvent(from, type, value) {
        const event = new EventMessage(from, type, value);
        this.socket.send(JSON.stringify(event));
    }

    receiveEvent(event) {
        this.events.push(event);

        this.events.forEach((e) => {
            this.handlers.forEach((handler) => {
                handler(e);
            });
        });
    }
}

const MessageNotifier = new MessageEventNotifier();
export { MessageEvent, MessageNotifier }; 