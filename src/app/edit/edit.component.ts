import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ons-page[edit]',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  title = 'TODO EDIT';
  textField: FormControl;
  constructor() { }

  ngOnInit() {
    this.formCheck();
  }

  formCheck() {
    this.textField = new FormControl();
    this.textField.valueChanges
      .subscribe(term => {

      });
  }

}
