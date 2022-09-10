import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.scss'],
})
export class ContactMainComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public contactForm = this.fb.group({
    name: '',
    email: '',
    msg: '',
  });
  ngOnInit(): void {}
  sendMail() {
    console.log(this.contactForm);
  }
}
