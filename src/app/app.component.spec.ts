import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TechskillsFaInputComponent } from './lib/techskills-fa-input/techskills-fa-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

    let component: AppComponent,
        fixture: ComponentFixture<AppComponent>,
        el: DebugElement,
        email: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, TechskillsFaInputComponent, InputRefDirective
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        email = el.query(By.css('#email-field'));
        fixture.detectChanges();
    })

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should create techskills font awesome email input', async(() => {

        expect(email).toBeTruthy();
    }));

    it('should include correct email icon', async(() => {
        expect(email.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
    }));

    it('should include input element', async(() => {
        expect(email.query(By.css('input'))).toBeTruthy();
    }))






});
