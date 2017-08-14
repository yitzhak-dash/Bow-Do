import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
import { WishItemListComponent } from './wish-item-list.component';


describe('WishItemListComponent', () => {
  let component: WishItemListComponent;
  let fixture: ComponentFixture<WishItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishItemListComponent ]
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
