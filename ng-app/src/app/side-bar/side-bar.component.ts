import { Component, OnInit } from '@angular/core';
//
import { MenuRoute, MenuRoutes, routes } from '../app-routing.module';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menuItems: MenuRoutes = [];
  selectedMenuItem: MenuRoute = {};

  constructor() {
  }

  ngOnInit() {
    this.menuItems = routes.filter(route => route.isMenuItem);
    // set default path as selected
    let defaultPath = routes.find(route => !!route.redirectTo).redirectTo;
    this.selectedMenuItem = this.menuItems.find(item => `/${item.path}` === defaultPath);
  }

}
