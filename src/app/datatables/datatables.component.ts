import { Component, OnInit, ViewChild } from '@angular/core';
// import { Contacts } from '../contacts';
import { HttpClient, HttpResponse } from '@angular/common/http';

class Person {
  id: number;
  first_name: string;
  last_name: string;
  email:string;
  avatar:string
}

class DataTablesResponse {
  data: any[];
  page: number;
  per_page: number;
  total: number;
  total_pages:number;
  ad: any;

}

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.css']
})
export class DatatablesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;

    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 2,
    //   serverSide: true,
    //   processing: true,
    //   ajax: (dataTablesParameters: any, callback) => {
    //     that.http.get<DataTablesResponse>(
    //         // 'https://angular-datatables-demo-server.herokuapp.com/',
    //         ' https://reqres.in/api/users?page=1',
    //         // dataTablesParameters

    //         dataTablesParameters, {}
    //       ).subscribe((resp:any) => {
    //         that.persons = resp.data;
    //         console.log("response: ",resp);

    //         callback({
    //           recordsTotal: resp.recordsTotal,
    //           recordsFiltered: resp.recordsFiltered,
    //           data: []
    //         });
    //       });
    //   },
    //   columns: [{ data: 'id' }, { data: 'first_name' }, { data: 'last_name' }]
    // };
  }




 
}


