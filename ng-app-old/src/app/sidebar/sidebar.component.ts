import { Component, OnInit } from '@angular/core';
import { MenuRoute, MenuRoutes, routes } from '../app-routing.module';

@Component({
  moduleId: module.id,
  selector: 'sidebar',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Bow-Do</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li *ngFor="let item of menuItems" [ngClass]="{active:selectedMenuItem === item}">
              <a routerLink="{{item.path}}" (click)="selectedMenuItem = item">{{item.title}}</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class SidebarComponent implements OnInit {
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
