import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RouComponent } from './rou/rou.component';
import { SampleComponent } from './sample/sample.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { SubjectsComponent } from './subjects/subjects.component';
const routes: Routes = [
  { path: 'Student', component: SampleComponent },
  {path:'Classroom',component: ClassroomComponent},
  {path:'Subject',component:SubjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
