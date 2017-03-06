import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PinPlaceComponent } from './pin-place/pin-place.component';

const routes: Routes = [
  {path: '', redirectTo: '/shopping-list', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'pin-place', component: PinPlaceComponent},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
