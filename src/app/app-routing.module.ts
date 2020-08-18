import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemErrorComponent} from './system-error/system-error.component';
import {QuestionsComponent} from './questions/questions.component';


const routes: Routes = [
  { path: 'error', component: SystemErrorComponent },
  {
    path: 'questions',
    component: QuestionsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
