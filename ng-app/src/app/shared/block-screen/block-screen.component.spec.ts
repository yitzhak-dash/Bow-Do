import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockScreenComponent } from './block-screen.component';

describe('BlockScreenComponent', () => {
  let component: BlockScreenComponent;
  let fixture: ComponentFixture<BlockScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
