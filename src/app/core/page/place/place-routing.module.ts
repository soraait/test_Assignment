import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceListComponent } from './place-list/place-list.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlaceComponent } from './place.component';

const routes: Routes = [
  {
    path: '',
    component: PlaceComponent,
    children: [
      {
        path: '',
        redirectTo: 'place-list',
        pathMatch: 'full',
      },
      {
        path: 'place-list',
        component: PlaceListComponent,
      },
      {
        path: 'detail',
        component: PlaceDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceRouting {}
