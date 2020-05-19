import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeRedAngryRoutingModule } from './bee-red-angry-routing.module';
import { BeeRedAngryComponent } from './bee-red-angry.component';


@NgModule({
  declarations: [BeeRedAngryComponent],
  imports: [
    CommonModule,
    BeeRedAngryRoutingModule
  ]
})
export class BeeRedAngryModule { }
