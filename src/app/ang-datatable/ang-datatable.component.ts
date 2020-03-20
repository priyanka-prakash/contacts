import { Component, OnInit, ViewChild} from '@angular/core';
import {contactService} from '../services/contacts.service';

@Component({
  selector: 'app-ang-datatable',
  templateUrl: './ang-datatable.component.html',
  styleUrls: ['./ang-datatable.component.css']
})

export class AngDatatableComponent implements OnInit {
  dataTable: any;
  dtOptions: any;
  tableData = [];

  @ViewChild('dataTable', {static: true}) table;

  constructor(private dataService: contactService) { }

  ngOnInit() {
    this.getDataFromSource();
  }

  getDataFromSource() {
    this.dataService.getContactListData().subscribe((data:any) => {
      console.log(data);
      this.tableData = data.data;
      this.dtOptions = {
        data: this.tableData,
        columns: [
          {title: 'ID', data: 'id'},
          {title: 'Email', data: 'email'},
          {title: 'First Name', data: 'first_name'},
          {title: 'Last Name', data: 'last_name'},
          {title: 'Avatar', data: 'avatar'}
        ]
      };
    }, err => {}, () => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
    });
  }



}
