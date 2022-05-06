import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'place', pathMatch: 'full' },
  {
    path: 'place',
    loadChildren: () =>
      import('./core/page/place/place.module').then((m) => m.PlaceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
