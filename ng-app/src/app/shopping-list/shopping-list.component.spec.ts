import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
//
import { MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import 'rxjs/add/observable/of';
//
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListActions } from './actions';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdCardModule,
        NoopAnimationsModule,
        NgReduxTestingModule
      ],
      providers: [
        ShoppingListActions
      ],
      declarations: [
        ShoppingListComponent
      ]
    }).compileComponents(); // compile template and css
    MockNgRedux.reset();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
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

  it('should select added item from the redux store', (done: any) => {
    const itemName = 'new added name #1';
    const itemName_2 = 'new added name #2';

    configMockRedux([
        {id: 0, name: itemName},
        {id: 0, name: itemName_2}],
      'shoppingList');

    fixture.detectChanges();

    component.shoppingList$.subscribe(items => {
      fixture.detectChanges();
      const addedItem = items[0];
      const addedItem2 = items[1];
      expect(addedItem.name).toBe(itemName);
      expect(addedItem2.name).toBe(itemName_2);
      done();
    });
  });

  it('should add items to the wish list', () => {
    const itemName = 'new added name #1';
    const itemName_2 = 'new added name #2';

    fixture.detectChanges();

    configMockRedux([
        {id: 0, name: itemName},
        {id: 0, name: itemName_2}],
      'shoppingList');

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('md-checkbox')[0].textContent).toContain(itemName);
    expect(compiled.querySelectorAll('md-checkbox')[1].textContent).toContain(itemName_2);
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

export function configMockRedux(mockStore: any[], selectorPath: string | string[]) {
  const cloneMockStore = [[...mockStore]];
  const shoppingItemStub = MockNgRedux.getSelectorStub(selectorPath);
  cloneMockStore.forEach(item => shoppingItemStub.next(item));
  shoppingItemStub.complete();
}
