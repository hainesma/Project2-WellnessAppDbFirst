"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var lift_component_1 = require("./lift.component");
var component;
var fixture;
describe('lift component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [lift_component_1.LiftComponent],
            imports: [platform_browser_1.BrowserModule],
            providers: [
                { provide: testing_1.ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = testing_1.TestBed.createComponent(lift_component_1.LiftComponent);
        component = fixture.componentInstance;
    }));
    it('should do something', testing_1.async(function () {
        expect(true).toEqual(true);
    }));
});
//# sourceMappingURL=lift.component.spec.js.map