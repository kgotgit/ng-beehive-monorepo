import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeGreenHappyRoutingModule } from './bee-green-happy-routing.module';
import { BeeGreenHappyComponent } from './bee-green-happy.component';
import { LibBeehiveUISharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';


@NgModule({
  declarations: [BeeGreenHappyComponent],
  imports: [
    CommonModule,
    BeeGreenHappyRoutingModule,
    LibBeehiveUISharedModule
  ]
})
export class BeeGreenHappyModule { }
