import { NgModule } from '@angular/core';
import { IdentifierModule } from './features/identifier';
import { MenuComponent } from './features/menu/menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuModule } from './features/menu/menu.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IdentifierModule,
    MenuModule,
    RouterModule
  ],
  exports: [IdentifierModule,MenuModule]
})
export class LibBeehiveUISharedModule { }
