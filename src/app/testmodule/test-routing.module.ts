import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadComponent } from './lazyload/lazyload.component';


const routes: Routes = [
  // lazy loading 
  { path: '',component:LazyloadComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
