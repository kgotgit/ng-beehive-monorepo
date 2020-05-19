import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    "path":"pages/beehive-green-happy",
     loadChildren:()=>import('./pages/bee-green-happy/bee-green-happy.module').then(mod=>mod.BeeGreenHappyModule),
  },
  {
    "path":"pages/beehive-green-cry",
     loadChildren:()=>import('./pages/bee-green-cry/bee-green-cry.module').then(mod=>mod.BeeGreenCryModule),
  },
  {"path":"",redirectTo:"pages/beehive-green-happy",pathMatch:'full'},
  {"path":"**",redirectTo:"pages/beehive-green-happy",pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
