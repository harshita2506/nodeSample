import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message: string;
  data: string;
  constructor() { }

  ngOnInit() {
    this.message = 'New parent messages';
  }
  buttonEvent(data) {
    this.data = data;
  }
}
