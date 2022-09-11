import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor(private api: ApiService) {}
  ngOnInit(): void {}
  submit(email: any) {
    this.api.email(email).subscribe((data: any) => {
      console.log('response', data);
    });
  }
}
