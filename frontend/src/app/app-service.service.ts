import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public resultFlag: boolean;
  result = [];
  constructor(private http: HttpClient) { }
  // private API_URL = "https://api.nasdaq.com/api/quote/NOW/info?assetclass=stocks";

  private API_URL = "http://localhost:3000/products";

  public sendPostRequest(product_name: string, product_price: string): Promise<any> {
    let body = {
      'product_name': product_name,
      'product_price': product_price
    };
    return this.http.post(this.API_URL, body)
      .toPromise()
      .then(res => {
        this.resultFlag = true;
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  public GetRequest(): Promise<any> {
    return this.http.get(this.API_URL, { headers: new HttpHeaders({'Authorization': 'Bearer ' + `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaGFyc2hpdGEiLCJlbWFpbCI6ImhhcnNoaXRhQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MDM4OTExOTcsImV4cCI6MTYwNDc1NTE5N30.UQFAWm5I7Wp0VmV3j-LRKsmGmjKuwmO6Tk16gJXLDdM`})})

      .toPromise()
      .then(result => {
        console.log("reeeeeeee", result);
      })
      .catch(error => {
        console.log("errrr", error);
      });
  }
}
