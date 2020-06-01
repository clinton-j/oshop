import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BsNavbarComponent = class BsNavbarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    logout() {
        this.auth.logout();
    }
};
BsNavbarComponent = __decorate([
    Component({
        selector: 'bs-navbar',
        templateUrl: './bs-navbar.component.html',
        styleUrls: ['./bs-navbar.component.css']
    })
], BsNavbarComponent);
export { BsNavbarComponent };
//# sourceMappingURL=bs-navbar.component.js.map