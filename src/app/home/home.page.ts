import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contact={
  name:"Université de douala",
  email:"uni@gmail.com",
  tel:"237",
  logo:"assets/images/logoalmani.jpg",
  location:"assets/images/loc.png"
  }

  constructor() {}

}
