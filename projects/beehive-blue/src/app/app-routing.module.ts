import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    "path":"pages/beehive-red-happy",
     loadChildren:()=>import('./pages/bee-blue-happy/bee-blue-happy.module').then(mod=>mod.BeeBlueHappyModule),
  },
  {"path":"",redirectTo:"pages/beehive-blue-happy",pathMatch:'full'},
  {"path":"**",redirectTo:"pages/beehive-blue-happy",pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
