import { Component, OnInit, ViewChild} from '@angular/core';
import { contactService } from '../services/contacts.service';
import {DataSource} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';
import {MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



export interface PeriodicElement {
  id:number;
  first_name: string;
  last_name:string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'app-contactfull-detail',
  templateUrl: './contactfull-detail.component.html',
  styleUrls: ['./contactfull-detail.component.css']
})

export class ContactfullDetailComponent implements OnInit {
  contactLists : any;
  displayedColumns : string[];
  dataSource : any;

  constructor(private contactService:contactService) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  

  ngOnInit(): void {
    this.contactList();
    
  }

  

  contactList(){
    this.contactService.getContactListData().subscribe((contactlistData: any)=>{
      
      console.log("fulldetails: ",contactlistData.data);
      // this.contactLists = contactlistData.data;
      const ELEMENT_DATA: PeriodicElement[] = contactlistData.data;
      this.displayedColumns = ['id','first_name', 'email'];


      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      console.log("data source : ",this.dataSource);
     

    })  
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }



}


