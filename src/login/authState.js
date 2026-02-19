export class AuthState {
    static Authenticated = new AuthState("Authenticated");
    static Unauthenticated = new AuthState("Unauthenticated");

    constructor(name) {
        this.name = name
    }
}