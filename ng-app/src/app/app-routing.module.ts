import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
//
import { PageNotFoundComponent } from './page-not-found.component';
import { PinPlaceComponent } from './pin-place/pin-place.component';
import { WishListComponent } from './wish-list/wish-list.component';

export const routes: MenuRoutes = [
  {path: '', redirectTo: '/shopping-list', pathMatch: 'full'},
  {path: 'shopping-list', component: WishListComponent, title: 'wish list', isMenuItem: true},
  {path: 'pin-place', component: PinPlaceComponent, title: 'pin place', isMenuItem: true},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

export interface MenuRoute extends Route {
  title?: string;
  isMenuItem?: boolean;
}

export declare type MenuRoutes = MenuRoute[];
