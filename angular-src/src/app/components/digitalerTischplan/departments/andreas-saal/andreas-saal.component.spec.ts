import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndreasSaalComponent } from './andreas-saal.component';

describe('AndreasSaalComponent', () => {
  let component: AndreasSaalComponent;
  let fixture: ComponentFixture<AndreasSaalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndreasSaalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndreasSaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
