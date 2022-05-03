import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
// { path:'',component:NavbarComponent,pathMatch:'full'},
 { path:'',component:FilterComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
