import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeeGreenCryComponent } from './bee-green-cry.component';


const routes: Routes = [
  {path:"",component:BeeGreenCryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeeGreenCryRoutingModule { }
