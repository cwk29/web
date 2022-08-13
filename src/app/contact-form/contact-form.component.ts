import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  topics: Array<string> = [
    'General Inquiry',
    'Alliance Partners',
    'Careers',
    'Customer Support',
    'Finance and Invoice',
    'Media Relations',
    'Sales & BD',
    'Small Business Inquiry',
    'Website Feedback',
  ];

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      organization: new FormControl(''),
      topic: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  update(e: any) {
    console.log(e);
    this.contactForm.setValue({ topic: e.target.value });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }
}
