import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)
  },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  // },
  {path: '**', redirectTo: 'pages/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
