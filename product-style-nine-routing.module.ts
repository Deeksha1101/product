import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductStyleNinePage } from './product-style-nine.page';

const routes: Routes = [
  {
    path: '',
    component: ProductStyleNinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductStyleNinePageRoutingModule {}
