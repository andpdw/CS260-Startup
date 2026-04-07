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
    events = [];
    handlers = [];

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === "http:" ? "ws" : "wss";
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

        this.socket.onopen = (event) => {
            this.receiveEvent(new EventMessage("Startup", MessageEvent.System, { msg: "connected" }));
        };

        this.socket.onclose = (event) => {
            this.receiveEvent(new EventMessage("Startup", MessageEvent.System, { msg: "disconnected" }));
        };

        this.socket.onerror = (err) => {
            console.error("WebSoecket error: ", err);
        };

        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch {}
        };
    }

    broadcastEvent(from, type, value) {
        const event = new EventMessage(from, type, value);

        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(event));
        } else {
            console.warn("WebSocket not open and can't send message");
        }
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers = this.handlers.filter((h) => h !== handler);
    }

    receiveEvent(event) {
        this.events.push(event);

        this.events.forEach((e) => {
            this.handlers.forEach((handler) => {
                handler();
            });
        });
    }
}

const MessageNotifier = new MessageEventNotifier();
export { MessageEvent, MessageNotifier }; 