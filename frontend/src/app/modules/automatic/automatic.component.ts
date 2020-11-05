import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.component.html',
  styleUrls: ['./automatic.component.css']
})
export class AutomaticComponent implements OnInit {
  name: string;
  model: string;
  productForm: FormGroup;
  constructor(private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    // this.name = this.route.snapshot.paramMap.get('name');
    // this.model = this.route.snapshot.paramMap.get('model');
    this.productForm = this.fb.group({
      product_name: [null, Validators.required],
      product_price: [null, Validators.required]
    });
  }
  onSubmit() {
    //this.router.navigate(['/automatic', value, 'kinshu']);
    let data: any = this.productForm.value;
    console.log("datadata", data);
    this.route.navigate(['/about'], {
      queryParams: { data: JSON.stringify(data) }
    });
  }
}
