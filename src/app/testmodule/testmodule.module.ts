import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadComponent } from './lazyload/lazyload.component';
import { TestRoutingModule } from './test-routing.module';




@NgModule({
  declarations: [LazyloadComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestmoduleModule { }
