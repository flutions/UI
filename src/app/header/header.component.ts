import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentTab = "home";
  viewTab = false;
  constructor() { }

  ngOnInit(): void {
    // console.log(window.location.pathname.split("/")[1]);
    
  }
  ngDoCheck(): void{
    this.currentTab = window.location.pathname.split("/")[1]
  }

}
