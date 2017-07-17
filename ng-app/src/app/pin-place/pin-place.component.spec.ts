import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinPlaceComponent } from './pin-place.component';

describe('PinPlaceComponent', () => {
  let component: PinPlaceComponent;
  let fixture: ComponentFixture<PinPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
