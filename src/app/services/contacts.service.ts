import {Injectable} from '@angular/core';
// import { HttpClientModule } from  '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable()

export class contactService{
    ListUrl = "https://reqres.in/api/users?page=1";
    DetailUrl = "https://reqres.in/api/users/3";
    constructor(private HttpClient:HttpClient){
        console.log("service ");
    }

    getContactListData(){
        console.log("from service get data");
        return this.HttpClient.get(this.ListUrl).pipe(
            map(contactData=>{
                return contactData;
            })
        );
    }

    getContactDetail(id){
        return this.HttpClient.get("https://reqres.in/api/users/"+id);
    }

    register(data){
        return this.HttpClient.post<any>('https://reqres.in/api/register', data);
    }

  

}