import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeeRedAngryComponent } from './bee-red-angry.component';


const routes: Routes = [
  {path:"",component:BeeRedAngryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeeRedAngryRoutingModule { }
