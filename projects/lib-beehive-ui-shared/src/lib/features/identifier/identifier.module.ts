import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentifierComponent } from './identifier.component';



@NgModule({
  declarations: [IdentifierComponent],
  imports: [
    CommonModule
  ],
  exports:[IdentifierComponent]
})
export class IdentifierModule { }
