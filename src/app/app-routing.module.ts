import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactfullDetailComponent } from './contactfull-detail/contactfull-detail.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { AngDatatableComponent } from './ang-datatable/ang-datatable.component';
import { RegistrationComponent } from './registration/registration.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { HomeComponent } from './home/home.component';
import { LazyloadComponent } from './testmodule/lazyload/lazyload.component';
import { CribListComponent } from './crib-list/crib-list.component';


const routes: Routes = [
  { path: '', component: ContactListComponent},
  { path: 'contactdetail/:id', component: ContactDetailComponent},
  { path: 'contactFullDetails', component: ContactfullDetailComponent},
  { path: 'Datatable', component: DatatablesComponent},
  { path: 'ListUsingDatatable', component: AngDatatableComponent},
  { path: 'Registration', component: RegistrationComponent},
  { path: 'DynamicForm', component: DynamicFormComponent},
  { path: 'Interaction', component: HomeComponent},
  { path: 'ReusableComponent', component: CribListComponent},

  
  { path: 'Test', loadChildren: './testmodule/testmodule.module.ts#TestmoduleModule'},



  
  // lazy loading 
  { path: 'TestModule', loadChildren:'./testmodule/testmodule.module#TestmoduleModule'},

  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactDetailComponent];
