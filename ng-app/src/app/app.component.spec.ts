import { TestBed, async } from '@angular/core/testing';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
//
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LocationActions } from './common/location.actions';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SideBarComponent,
      ],
      providers: [
        LocationActions
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
