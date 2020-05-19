import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeBlueShockRoutingModule } from './bee-blue-shock-routing.module';
import { BeeBlueShockComponent } from './bee-blue-shock.component';


@NgModule({
  declarations: [BeeBlueShockComponent],
  imports: [
    CommonModule,
    BeeBlueShockRoutingModule
  ]
})
export class BeeBlueShockModule { }
