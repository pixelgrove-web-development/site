import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactUsService } from './contact-us.service';
import { ContactUsInfo } from '../models/contact-us';

@Component({
  selector: 'app-contact-us',
  template: `<div class="contact-us">
    <div class="content-grid contact-us-heading">
      <div class="contact-us-img"></div>
      <div class="heading-text">
        <h1>Contact</h1>
        <h1 class="thin">Us</h1>
      </div>
    </div>
    <div class="content">
      <h2 *ngIf="!formSubmitted">LET'S GET IN TOUCH</h2>
      <h3 *ngIf="!formSubmitted">
        We're excited to hear from you! Whether you have questions, want to
        discuss a project, or simply say hello, feel free to reach out using the
        form below or by emailing us directly at [your@email.com]. We're here to
        help bring your vision to life.
      </h3>
      <form [formGroup]="form" *ngIf="!formSubmitted">
        <div
          class="field"
          [class.invalid]="form.controls.name.invalid && submitted"
        >
          <span class="label">Name*</span>
          <input type="text" formControlName="name" />
        </div>
        <div class="field">
          <span class="label">Company Name</span>
          <input type="text" />
        </div>
        <div
          class="field"
          [class.invalid]="form.controls.email.invalid && submitted"
        >
          <span class="label">E-mail*</span>
          <input type="text" formControlName="email" />
        </div>
        <div
          class="field"
          [class.invalid]="
            form.controls.phoneNumber.invalid &&
            form.controls.phoneNumber.touched
          "
        >
          <span class="label">Phone number</span>
          <input type="text" formControlName="phoneNumber" />
        </div>
        <div
          class="field width-full"
          [class.invalid]="form.controls.subjectLine.invalid && submitted"
        >
          <span class="label">Subject Line*</span>
          <input type="text" formControlName="subjectLine" />
        </div>
        <div
          class="field width-full"
          [class.invalid]="form.controls.message.invalid && submitted"
        >
          <span class="label">Message*</span>
          <textarea formControlName="message"></textarea>
        </div>

        <button type="submit" class="btn solid" (click)="submit()">
          Submit
        </button>
      </form>

      <ng-container *ngIf="formSubmitted">
        <div class="submitted">
          <h2>Thanks! Form has been submitted</h2>
          <button
            class="btn outline"
            (click)="form.reset(); formSubmitted = false"
          >
            Resubmit form
          </button>
        </div>
      </ng-container>
    </div>
  </div> `,
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  form = this.formBuilder.group({
    name: ['', Validators.required],
    companyName: [''],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    subjectLine: ['', Validators.required],
    message: ['', [Validators.required, Validators.maxLength(2500)]],
  });
  formSubmitted = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private contactUsService: ContactUsService
  ) {}

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      this.contactUsService
        .saveContactUsInfo(this.form.value as ContactUsInfo)
        .subscribe(() => {
          this.formSubmitted = true;
          this.submitted = false;
        });
    }
  }
}
