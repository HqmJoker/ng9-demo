import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',data:{preload:true}, loadChildren: () => import('src/pages/index/index.module').then(m => m.IndexModule) },
  { path: 'index',data:{preload:true}, loadChildren: () => import('src/pages/index/index.module').then(m => m.IndexModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
