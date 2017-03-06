import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sidebar',
  template: `
<div className="sidebar">
        <ul>
            <li>
                <a class="btn" routerLink="/shopping-list">shopping list</a>
            </li>
            <li>
                <a class="btn" routerLink="/map">map</a>
            </li>
            <li>
                <a class="btn" routerLink="/pin-place">pin place</a>
            </li>
        </ul>
    </div>
`
})
export class SidebarComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
