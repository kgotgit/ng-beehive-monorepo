import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    "path":"pages/beehive-red-happy",
     loadChildren:()=>import('../../../beehive-red/src/app/pages/bee-red-happy/bee-red-happy.module').then(mod=>mod.BeeRedHappyModule),
  },
  {
    "path":"pages/beehive-red-angry",
     loadChildren:()=>import('../../../beehive-red/src/app/pages/bee-red-angry/bee-red-angry.module').then(mod=>mod.BeeRedAngryModule),
  },
  {
    "path":"pages/beehive-green-happy",
     loadChildren:()=>import('../../../beehive-green/src/app/pages/bee-green-happy/bee-green-happy.module').then(mod=>mod.BeeGreenHappyModule),
  },
  {
    "path":"pages/beehive-green-cry",
     loadChildren:()=>import('../../../beehive-green/src/app/pages/bee-green-cry/bee-green-cry.module').then(mod=>mod.BeeGreenCryModule),
  },
  {
    "path":"pages/beehive-blue-happy",
     loadChildren:()=>import('../../../beehive-blue/src/app/pages/bee-blue-happy/bee-blue-happy.module').then(mod=>mod.BeeBlueHappyModule),
  },
  {
    "path":"pages/beehive-blue-shock",
     loadChildren:()=>import('../../../beehive-blue/src/app/pages/bee-blue-shock/bee-blue-shock.module').then(mod=>mod.BeeBlueShockModule),
  },
  {"path":"",redirectTo:"pages/beehive-red-happy",pathMatch:'full'},
  {"path":"**",redirectTo:"pages/beehive-red-happy",pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
