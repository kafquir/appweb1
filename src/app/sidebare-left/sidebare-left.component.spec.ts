import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebareLeftComponent } from './sidebare-left.component';

describe('SidebareLeftComponent', () => {
  let component: SidebareLeftComponent;
  let fixture: ComponentFixture<SidebareLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebareLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebareLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
