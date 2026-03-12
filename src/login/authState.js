export class AuthState {
    static Admin = new AuthState("Admin");
    static Authenticated = new AuthState("Authenticated");
    static Unauthenticated = new AuthState("Unauthenticated");

    constructor(name) {
        this.name = name
    }
}