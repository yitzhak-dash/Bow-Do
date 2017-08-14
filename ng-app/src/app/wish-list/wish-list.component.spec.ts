import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//
import { MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import 'rxjs/add/observable/of';
//
import { WishListActions } from './actions';
import { WishListComponent } from './wish-list.component';
import { WishItemListComponent } from './wish-item-list/wish-item-list.component';

describe('WishListComponent', () => {
  let component: WishListComponent;
  let fixture: ComponentFixture<WishListComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdCardModule,
        NoopAnimationsModule,
        NgReduxTestingModule
      ],
      providers: [
        WishListActions
      ],
      declarations: [
        WishListComponent,
        WishItemListComponent
      ]
    }).compileComponents(); // compile template and css
    MockNgRedux.reset();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(WishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const debugElement = fixture.debugElement.query(By.css('h3'));
    const nativeElement = debugElement.nativeElement;

    expect(nativeElement.textContent).toBe('Wish list');
  });

  it('should clear input after entering ([ENTER pressed]) an new item', () => {
    const debugElementName = fixture.debugElement.query(By.css('.wish-name'));
    const nativeElementName = debugElementName.nativeElement;
    nativeElementName.value = 'new added name #1';
    expect(nativeElementName.value).toBe('new added name #1');

    fixture.detectChanges();
    const event = new KeyboardEvent('keypress', {
      'key': 'Enter'
    });
    nativeElementName.dispatchEvent(event);
    fixture.detectChanges();
    expect(nativeElementName.value).toBe('');
  });


  it('should not clear input after pressing key that is not [ENTER]', () => {
    const debugElementName = fixture.debugElement.query(By.css('.wish-name'));
    const nativeElementName = debugElementName.nativeElement;
    nativeElementName.value = 'new added name #1';
    expect(nativeElementName.value).toBe('new added name #1');

    fixture.detectChanges();
    const event = new KeyboardEvent('keypress', {
      'key': 'A'
    });
    nativeElementName.dispatchEvent(event);
    fixture.detectChanges();
    expect(nativeElementName.value).toBe('new added name #1');
  });

});

