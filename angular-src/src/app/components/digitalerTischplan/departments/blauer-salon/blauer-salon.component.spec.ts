import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlauerSalonComponent } from './blauer-salon.component';

describe('BlauerSalonComponent', () => {
  let component: BlauerSalonComponent;
  let fixture: ComponentFixture<BlauerSalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlauerSalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlauerSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
