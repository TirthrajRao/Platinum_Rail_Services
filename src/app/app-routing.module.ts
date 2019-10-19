import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from './view/course/course.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {InstructorComponent} from './view/instructor/instructor.component';
import {JobComponent} from './view/job/job.component';

/**
 * routing of all components
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashBoard',
    pathMatch: 'full'
  },
  {
    path: 'dashBoard',
    component: DashboardComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'instructor',
    component: InstructorComponent
  },
  {
    path: 'jobDetails',
    component: JobComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
