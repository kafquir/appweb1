import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneDeContactComponent } from './persone-de-contact.component';

describe('PersoneDeContactComponent', () => {
  let component: PersoneDeContactComponent;
  let fixture: ComponentFixture<PersoneDeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoneDeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoneDeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
