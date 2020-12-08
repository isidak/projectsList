import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyLibModule} from 'my-lib';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyLibModule
  ],
  exports: [MyLibModule]
})
export class UsersLibModule { }
