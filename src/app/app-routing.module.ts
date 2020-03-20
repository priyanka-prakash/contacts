import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactfullDetailComponent } from './contactfull-detail/contactfull-detail.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { AngDatatableComponent } from './ang-datatable/ang-datatable.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path: '', component: ContactListComponent},
  { path: 'contactdetail/:id', component: ContactDetailComponent},
  { path: 'contactFullDetails', component: ContactfullDetailComponent},
  { path: 'Datatable', component: DatatablesComponent},
  { path: 'ListUsingDatatable', component: AngDatatableComponent},
  { path: 'Registration', component: RegistrationComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactDetailComponent];
