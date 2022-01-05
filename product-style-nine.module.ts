import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductStyleNinePageRoutingModule } from './product-style-nine-routing.module';

import { ProductStyleNinePage } from './product-style-nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductStyleNinePageRoutingModule
  ],
  declarations: [ProductStyleNinePage]
})
export class ProductStyleNinePageModule {}
