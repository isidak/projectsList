import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PaginationComponent} from './pagination.component';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [PaginationComponent]
})
export class PaginationModule { }
