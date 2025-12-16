import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSnackBarModule,
    FlexLayoutModule
  ]
})
export class ProductModule { }
