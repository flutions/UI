import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-faq',
  templateUrl: './service-faq.component.html',
  styleUrls: ['./service-faq.component.scss'],
})
export class ServiceFaqComponent implements OnInit {
  constructor(private router: Router) {}
  current = -1;
  faq: any = [];
  serviceFaq = [
    {
      q: 'How Much Time Does It Take?',
      a: "Based on the requirement the will be quoted and then it'll deleveren on time.",
    },
    {
      q: 'I have a Bigger Project Can you handle It?',
      a: 'Yes We can, Though we have a qualified team and they are expert in the respective technologies, We will handle the project smoothly.',
    },
  ];
  contactFaq = [
    {
      q: 'How can we communicate?',
      a: 'Please update your details in this page. We will reach you out through email or phone.',
    },
    {
      q: 'How do you communicate?',
      a: 'Please update your details in this page. We will reach you out through email or phone.',
    },
  ];
  ngOnInit(): void {
    this.faq =
      this.router.url == '/services' ? this.serviceFaq : this.contactFaq;
  }
}
