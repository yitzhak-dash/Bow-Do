import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/shopping-list', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', component: PageNotFoundComponent}
  // {path: 'detail/:id', component: HeroDetailComponent},
  // {path: 'heroes', component: HeroesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
