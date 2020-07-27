import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechskillsFaInputComponent } from './techskills-fa-input.component';

describe('TechskillsFaInputComponent', () => {
  let component: TechskillsFaInputComponent;
  let fixture: ComponentFixture<TechskillsFaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechskillsFaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechskillsFaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
