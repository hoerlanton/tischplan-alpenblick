import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmComponent } from './turm.component';

describe('TurmComponent', () => {
  let component: TurmComponent;
  let fixture: ComponentFixture<TurmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
