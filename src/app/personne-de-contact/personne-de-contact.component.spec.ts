import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneDeContactComponent } from './personne-de-contact.component';

describe('PersonneDeContactComponent', () => {
  let component: PersonneDeContactComponent;
  let fixture: ComponentFixture<PersonneDeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonneDeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneDeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
