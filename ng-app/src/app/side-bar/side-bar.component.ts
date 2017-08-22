import { Component, OnInit } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import { Subscription } from 'rxjs/Subscription';
//
import { IAppState } from '../store/root-state.model';
import { MenuRoute, MenuRoutes, routes } from '../app-routing.module';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menuItems: MenuRoutes = [];
  selectedMenuItem: MenuRoute = {};

  private routeSubscription: Subscription;
  private onLanding: boolean;

  constructor(ngRedux: NgRedux<IAppState>) {
    this.routeSubscription = ngRedux.select<string>((appState: IAppState) => appState.router)
      .subscribe(router => {
        this.onLanding = router === '/home';
      })
  }

  ngOnInit() {
    this.menuItems = routes.filter((route: MenuRoute) => route.isMenuItem);
    // set default path as selected
    const defaultPath = routes.find(route => !!route.redirectTo).redirectTo;
    this.selectedMenuItem = this.menuItems.find(item => `/${item.path}` === defaultPath);
  }

}
