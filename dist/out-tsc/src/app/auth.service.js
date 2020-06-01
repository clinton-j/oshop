import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this.user$ = afAuth.authState;
    }
    login() {
        this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
    logout() {
        this.afAuth.signOut();
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map