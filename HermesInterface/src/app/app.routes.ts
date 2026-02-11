import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileLayoutComponent } from './layouts/mobile-layout/mobile-layout.component';
import { FreightListComponent } from './features/freight/freight-list/freight-list.component';

export const routes: Routes = [
  {
    path: '',
    component: MobileLayoutComponent,
    children: [
      { path: '', redirectTo: '/freights', pathMatch: 'full' },
      { path: 'freights', component: FreightListComponent },
      // Adicionar outras rotas aqui
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}