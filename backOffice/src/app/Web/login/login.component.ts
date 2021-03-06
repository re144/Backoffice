import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {ConfigurationService} from '../../services/configuration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  login: any;
  hide = true;
  // tslint:disable-next-line:variable-name
  constructor( public loginService: LoginService , private router: Router, private route: ActivatedRoute, public config: ConfigurationService) { }
  ngOnInit(): void {
    //  this.loginService.getusers();
    this.loginService.login_status.subscribe(data => {
      this.login = data;
    });
  }
  authendicated(form: NgForm){
     this.loginService.authendicated(form);

  }}
