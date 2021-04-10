import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { ListComponent } from './courses/list/list.component';
import { NewComponent } from './courses/new/new.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path:'',
  component:CoursesComponent,
  children:[
    {path: '', component: ListComponent },
    {path:'/new',component: NewComponent},
    {path:'**',component:NotFoundComponent}
  ]
}
  
];


@NgModule({
  declarations: [
    CoursesComponent,
    ListComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    RouterModule.forChild(routes),

    
  ],
 
  
})
export class CoursesModule { }
