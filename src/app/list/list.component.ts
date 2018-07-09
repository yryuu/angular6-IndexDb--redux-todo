import { Component, OnInit } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import {
  OnsNavigator,
} from 'ngx-onsenui';
@Component({
  selector: 'ons-page[list]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title = 'TODO LIST';
  constructor(private _navigator: OnsNavigator) { }

  ngOnInit() {
  }

  goEdit() {
    this._navigator.element.pushPage(EditComponent, { animation: 'slide' });
  }

}
