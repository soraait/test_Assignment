import { PlaceRouting } from './place-routing.module';
// module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// component
import { PlaceComponent } from './place.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
@NgModule({
  imports: [CommonModule, PlaceRouting],
  declarations: [PlaceComponent, PlaceDetailComponent, PlaceListComponent],
})
export class PlaceModule {}
