import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppServiceService } from './app-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from './service/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  productForm: FormGroup;
  todayDate: any;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private appService: AppServiceService, private route: ActivatedRoute, private service: MyserviceService) { }

  ngOnInit() {

  }
  // dateClick(){
  //   this.todayDate = this.service.showTodayDate();
  // }
  // onSubmit() {
  //   this.appService.sendPostRequest(this.productForm.value.product_name, this.productForm.value.product_price)
  //   .then(result => {
  //   })
  //   .catch(error => {
  //     console.log("error fr", error);
  //   });
  // }

  // datfunction() {
  //   this.appService.GetRequest()
  //   .then(result => {
  //     console.log("result fr", result);
  //   })
  //   .catch(error => {
  //     console.log("error fr", error);
  //   });
  // }

  
}
