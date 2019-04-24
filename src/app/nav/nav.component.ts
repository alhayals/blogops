import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menu=[
    {label:'Most Recent', link:'/'},
    {label:'Tech', link:'/tech'},
    {label:'Design', link:'/design'},
    {label:'Music', link:'/music'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
