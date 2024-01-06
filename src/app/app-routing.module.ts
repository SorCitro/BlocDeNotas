import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasPage } from './notas/notas.page';

const routes: Routes = [
  { path: '', redirectTo: 'notas', pathMatch: 'full' },
  { path: 'notas', loadChildren: () => import('./notas/notas.module').then(m => m.NotasPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

