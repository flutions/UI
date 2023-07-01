import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss'],
})
export class InquiryComponent implements OnInit {
  constructor(private fb: FormBuilder, private api: ApiService) {}
  public inquiryForm = this.fb.group({
    name: '',
    email: '',
  });

  ngOnInit(): void {}
  submit() {
    this.api.inquiry(this.inquiryForm.value).subscribe((data: any) => {
      console.log('response', data);
    });
  }
}
