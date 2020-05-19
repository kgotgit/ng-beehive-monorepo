import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeBlueShockRoutingModule } from './bee-blue-shock-routing.module';
import { BeeBlueShockComponent } from './bee-blue-shock.component';
import { LibBeehiveUISharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';


@NgModule({
  declarations: [BeeBlueShockComponent],
  imports: [
    CommonModule,
    BeeBlueShockRoutingModule,
    LibBeehiveUISharedModule
  ]
})
export class BeeBlueShockModule { }
