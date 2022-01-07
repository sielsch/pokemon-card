import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';


const routes: Routes = [{
  path: 'basket',
  component: BasketComponent
},
{
  path: '',
  component: CatalogComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
