import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { AppComponent }  from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, SidebarComponent, ShoppingListComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
