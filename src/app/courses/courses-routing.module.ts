import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CoursesComponent } from './courses.component';
import { ListComponent } from './courses/list/list.component';
import { NewComponent } from './courses/new/new.component';

const routes: Routes = [
  {
    path:'',
  component:CoursesComponent,
  children:[
    {path: '/', component: ListComponent },
    {path:'/new',component: NewComponent},
    {path:'**',component:NotFoundComponent}
  ]
}
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],

  exports: [RouterModule]
})
export class CoursesRoutingModule { }
