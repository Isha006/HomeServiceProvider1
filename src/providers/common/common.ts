import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

options: RequestOptions;
public base_url: string="http://rakhi.crystalbiltech.com/service/api/";

public serializeObj(obj) {
 var result = [];
   for (var property in obj)
  result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
  
 }

  constructor(public http: HttpClient) {
    console.log('Hello CommonProvider Provider');

    let headers = new Headers();
headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
this.options= new RequestOptions({ headers: headers });
 
  }
 

}
