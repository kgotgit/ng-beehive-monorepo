import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeeGreenCryComponent } from './bee-green-cry.component';
import { BeeGreenCryRoutingModule } from './bee-green-cry-routing.module';
import { LibBeehiveUISharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';



@NgModule({
  declarations: [BeeGreenCryComponent],
  imports: [
    CommonModule,
    BeeGreenCryRoutingModule,
    LibBeehiveUISharedModule
  ]
})
export class BeeGreenCryModule { }
