import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechskillsMdInputComponent } from './techskills-md-input.component';

describe('TechskillsMdInputComponent', () => {
  let component: TechskillsMdInputComponent;
  let fixture: ComponentFixture<TechskillsMdInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechskillsMdInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechskillsMdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
