import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {
  domainForm: FormGroup;
  domains = [
    {value: 'domain-1', viewValue: 'Domain1'},
    {value: 'domain-2', viewValue: 'Domain2'},
  ];

  constructor(private formBuilder: FormBuilder,
    private router:Router) {
    this.domainForm = this.formBuilder.group({
      selectDomain : ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  getDomain(value){
    console.log(value);
    
    if(value === 'domain-1'){
      this.router.navigateByUrl('domains/domain1');
    }else{
      this.router.navigateByUrl('domains/domain2');
    }
  }

}
