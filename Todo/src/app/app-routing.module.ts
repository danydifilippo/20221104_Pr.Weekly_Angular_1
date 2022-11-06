import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiPage } from './completati/completati.page';
import { TodoPage } from './todo/todo.page';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'todo'
  },
  {
    path:'todo',
    component: TodoPage
  },
  {
    path:'completed',
    component: CompletatiPage
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
