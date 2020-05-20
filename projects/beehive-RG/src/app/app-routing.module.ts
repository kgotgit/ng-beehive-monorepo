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

  {"path":"",redirectTo:"pages/beehive-red-happy",pathMatch:'full'},
  {"path":"**",redirectTo:"pages/beehive-red-happy",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
