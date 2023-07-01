import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.scss'],
})
export class ContactMainComponent implements OnInit {
  constructor(private fb: FormBuilder, private api: ApiService) {}
  public contactForm = this.fb.group({
    name: '',
    email: '',
    msg: '',
  });
  ngOnInit(): void {}
  sendMail() {
    this.api.contactus(this.contactForm.value).subscribe((data: any) => {
      console.log('response', data);
    });
  }
}
