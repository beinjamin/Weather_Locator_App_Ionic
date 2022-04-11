import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menus=[
    {
      title:"Home" , url:"menu/home" ,icon: 'share'
    },
    {
      title:"Meteo" , url:"menu/meteo" ,icon: 'snow'
    },
    {
      title:"Gallery" , url:"menu/gallery" ,icon: 'school'
    },
    {
      title:"Location" , url:"menu/location" ,icon: 'sync'
    },
    {
      title:"Logout" , url:"/login" ,icon: 'logout'
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
