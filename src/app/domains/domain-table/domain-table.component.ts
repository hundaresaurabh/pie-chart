import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-domain-table',
  templateUrl: './domain-table.component.html',
  styleUrls: ['./domain-table.component.scss']
})
export class DomainTableComponent implements OnInit {

  @Input() tableOneData: [];
  @Output() userData: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    console.log(this.tableOneData);
    
  }

  showUserTable(user:any){
    console.log('user', user);
    this.userData.emit(user.chat);
  }

}
