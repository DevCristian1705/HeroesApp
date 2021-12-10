import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAuth } from 'src/app/auth/interface/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  

  get auth(): IAuth{
    return this.authService.auth;
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authService.loguot();
    this.router.navigate(['/auth/login']);
  }
}
