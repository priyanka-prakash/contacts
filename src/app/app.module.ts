import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';


import { ContactListComponent } from './contact-list/contact-list.component';
import { contactService } from './services/contacts.service';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactfullDetailComponent } from './contactfull-detail/contactfull-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DatatablesComponent } from './datatables/datatables.component';
import { DataTablesModule } from 'angular-datatables';
import { AngDatatableComponent } from './ang-datatable/ang-datatable.component';
import { RegistrationComponent } from './registration/registration.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    routingComponents,
    ContactfullDetailComponent,
    DatatablesComponent,
    AngDatatableComponent,
    RegistrationComponent,
    DynamicFormComponent,
    HomeComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    DataTablesModule,
    ReactiveFormsModule
    
  ],
  providers: [contactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
