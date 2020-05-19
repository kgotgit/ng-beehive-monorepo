import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeeBlueHappyComponent } from './bee-blue-happy.component';


const routes: Routes = [
  {path:'',component:BeeBlueHappyComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeeBlueHappyRoutingModule { }
