import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoterSalonComponent } from './.component';

describe('RoterSalonComponent', () => {
  let component: RoterSalonComponent;
  let fixture: ComponentFixture<RoterSalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoterSalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoterSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
