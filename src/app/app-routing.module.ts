import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'forum'},
  {path:'forum ',
  loadChildren:()=> import('./forum/forum.module').then(m =>m.ForumModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
