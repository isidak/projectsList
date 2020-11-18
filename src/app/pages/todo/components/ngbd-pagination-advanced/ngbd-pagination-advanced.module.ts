import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbdPaginationAdvancedComponent } from './ngbd-pagination-advanced.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [NgbdPaginationAdvancedComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [NgbdPaginationAdvancedComponent]
})
export class NgbdPaginationAdvancedModule { }
