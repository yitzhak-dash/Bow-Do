import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
//
import { NgReduxTestingModule } from '@angular-redux/store/testing';
import { TagInputModule } from 'ngx-chips';
import { MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//
import { PinPlaceComponent } from './pin-place.component';
import { PinPlaceActions } from './actions';

describe('PinPlaceComponent', () => {
  let component: PinPlaceComponent;
  let fixture: ComponentFixture<PinPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgReduxTestingModule,
        NoopAnimationsModule,
        FormsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdCardModule,
        TagInputModule,
      ],
      providers: [
        PinPlaceActions
      ],
      declarations: [
        PinPlaceComponent
      ]
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
