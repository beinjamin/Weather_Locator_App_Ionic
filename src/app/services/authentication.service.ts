import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticated:boolean;

  public token:string;

  constructor() { }

  public login(username:string, password:string){
    if(username=='admin' && password=='1234'){
      this.authenticated=true;
      return this.authenticated;
      this.saveToken();
    }
    else{
      this.authenticated=false;

    }
    return this.authenticated;

    }
    private saveToken() {
      this.token="azerty";
      localStorage.setItem("myToken",this.token);
    }

    public loadToken() {
      this.token=localStorage.getItem("my")

    }
  }

