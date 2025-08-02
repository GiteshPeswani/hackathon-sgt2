import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CategoryAllComponent } from './category-all/category-all.component';



@NgModule({
  declarations: [
    CategoryAllComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MenuModule { }
