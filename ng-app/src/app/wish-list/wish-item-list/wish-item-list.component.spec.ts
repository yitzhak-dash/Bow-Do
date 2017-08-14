import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
import { MdCheckboxModule } from '@angular/material';
//
import { WishItemListComponent } from './wish-item-list.component';
import { WishListActions } from '../actions';


describe('WishItemListComponent', () => {
  let component: WishItemListComponent;
  let fixture: ComponentFixture<WishItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MdCheckboxModule
      ],
      declarations: [ WishItemListComponent ],
      providers: [
        WishListActions
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
