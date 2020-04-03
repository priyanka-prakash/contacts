import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personName'
})
export class PersonNamePipe implements PipeTransform {


  /**
   * define parameters to customize the pipe’s behavior. 
   * Here we make the gender prefix optional simply by adding a parameter that would
   * be true if we want the prefix displayed, false otherwise:
   * @param value 
   * @param args 
   */

  transform(value: any, displayPrefix: boolean = true): any {
    // return `${value.firstName} ${value.lastName}`; //es6
    let prefix = "";
    if (displayPrefix)
      prefix = (value.gender == "male") ? "Mr." : "Mrs.";
    return prefix +" "+value.first_name +" "+ value.last_name;

  }

 

}
