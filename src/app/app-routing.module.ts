import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';




const routes: Routes = [
  { path: 'contactList', component: ContactListComponent},
  { path: 'contactDetail', component: ContactDetailComponent},

];

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'products', component: ProductsComponent },
//   { path: 'product-detail/:id', component: ProductDetailComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: '**', component: NoPageFoundComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactDetailComponent];
