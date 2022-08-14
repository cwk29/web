import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm: UntypedFormGroup;
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
    this.contactForm = new UntypedFormGroup({
      name: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      organization: new UntypedFormControl(''),
      topic: new UntypedFormControl('', Validators.required),
      message: new UntypedFormControl('', Validators.required),
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
