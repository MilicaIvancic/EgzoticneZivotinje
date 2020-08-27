import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  animations: [
    trigger('showHide', [
      state('true', style({transform: 'scale(1)'})),
      state('false', style({transform: 'scale(0)'})),
      transition('false<=>true', animate('800ms ease'))
    ])
  ]
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  isMessageDisplayed = false;
  zivotinje = ['tarantula', 'bradata agama', 'gekon', 'zmija' ];
  odabranaZivotinje = '';
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.pattern('^[A-ZŠĐČĆŽ][a-zšđčćž]{1,12}\\s[A-ZŠĐČĆŽ][a-zšđčćž]{1,12}$')]),
      email : new FormControl('', [Validators.required, Validators.email]),
      subject : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      message : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(300)]),
      animal: new FormControl('', Validators.required)
    });
  }
  // tslint:disable-next-line:typedef
  onFormSubmit(){
    this.isMessageDisplayed = true;
    this.contactForm.reset();
  }
  // tslint:disable-next-line:typedef
  onFormChanged(){
    this.isMessageDisplayed = false;
  }
  // tslint:disable-next-line:typedef
  onItemChange(value){
    this.odabranaZivotinje = value.id;
 }

}
