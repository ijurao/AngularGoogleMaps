import { MaterialModule } from './../material/material.module';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { MapEditComponent } from './map/map-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MapComponent, MapEditComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    ReactiveFormsModule

  ],
  exports:[MapComponent,MapEditComponent,ReactiveFormsModule]

})
export class ComponentsModule { }
