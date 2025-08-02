import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoryAllComponent } from './menu/category-all/category-all.component';

const routes: Routes = [
  // {
  //   path:"",
  //   component:NavbarComponent
  // },
  // {
  //   path:"footer",
  //   component:FooterComponent 
  // }
  {
   path:"category-all",
   component:CategoryAllComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
