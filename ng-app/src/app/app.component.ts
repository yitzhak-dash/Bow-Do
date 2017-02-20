import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div className="app">
        <sidebar></sidebar>
        <router-outlet></router-outlet>
    </div>
`,
})

export class AppComponent {
}
