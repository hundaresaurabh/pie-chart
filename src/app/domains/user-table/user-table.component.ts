import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit, AfterViewInit {
  @Input() userDetails;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  }

}
