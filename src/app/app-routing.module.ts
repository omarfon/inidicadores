import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutsComponent } from './shared/layouts/layouts.component';
import { DetailMonthComponent } from './pages/detail-month/detail-month.component';
import { LayoutInternComponent } from './shared/layout-intern/layout-intern.component';

const routes: Routes = [
{
    path:'',
    component:LayoutsComponent,
    children: [
    {
    path:'',component:HomeComponent
},
]
},
{
  path:'home',
  component:LayoutsComponent,
  children: [
  {
  path:'',component:HomeComponent
},
]
},
{
  path:'detail-month',
  component:LayoutInternComponent,
  children: [
  {
  path:'',component:DetailMonthComponent
},]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
