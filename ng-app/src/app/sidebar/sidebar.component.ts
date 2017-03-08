import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sidebar',
  template: `
<div class="sidebar">
        <ul>
            <li>
                <a md-button routerLink="/shopping-list">shopping list</a>
            </li>
            <li>
                <a md-button routerLink="/map">map</a>
            </li>
            <li>
                <a md-button routerLink="/pin-place">pin place</a>
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
