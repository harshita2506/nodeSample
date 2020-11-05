import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  displayedColumns: string[] = ['product_name', 'product_price'];

  // @Input() msg: string;
  // @Output() childMessage = new EventEmitter();
  constructor(private fb: FormBuilder, private service: AppServiceService) { }
  productForm: FormGroup;
  ngOnInit() {
    this.productForm = this.fb.group({
      product_name: [null, Validators.required],
      product_price: [null, Validators.required]
    });
    //this.getdata();
  }

  onSubmit() {
    const data = {
      product_name: this.productForm.value.product_name,
      product_price: this.productForm.value.product_price
    };
    this.service.sendPostRequest(data.product_name, data.product_price)
      .then(result => {
        console.log("result", result);
      })
      .catch(err => {
        console.log("error", err);
      });


    // newclick($event) {
    //   this.childMessage.emit('New Child Message');
    // }
  }
  getdata(){
    this.service.GetRequest()
    .then(result => {
      console.log("oooooooooo", result);
    });
  }
}
