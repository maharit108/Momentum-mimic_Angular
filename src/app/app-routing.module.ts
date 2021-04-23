import { MainLandComponent } from './components/landing/main-land/main-land.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDosComponent } from '../app/components/todo/to-dos/to-dos.component'

const routes: Routes = [
  { path: 'todo', component: ToDosComponent },
  { path: '', component: MainLandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
