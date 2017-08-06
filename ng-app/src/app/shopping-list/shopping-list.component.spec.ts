import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
import { MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListActions } from './actions';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdCardModule,
        NoopAnimationsModule,
      ],
      providers: [
        ShoppingListActions
      ],
      declarations: [
        ShoppingListComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
