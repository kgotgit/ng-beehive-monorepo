import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeBlueHappyRoutingModule } from './bee-blue-happy-routing.module';
import { BeeBlueHappyComponent } from './bee-blue-happy.component';
import { LibBeehiveUISharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';


@NgModule({
  declarations: [BeeBlueHappyComponent],
  imports: [
    CommonModule,
    BeeBlueHappyRoutingModule,
    LibBeehiveUISharedModule
  ]
})
export class BeeBlueHappyModule { }
