import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class TestComponent implements OnInit {
  info = { name: 'mohamed' , email: 'rejdali@fork',tel: 655552 };


  comments: any = [{ date: new Date(), message: 'A'},
    {date: new Date(), message: 'B'},
    {date: new Date() , message: 'c'},
    {date: new Date(), message: 'd'}
  ];

  commentaire: any = {date: null, message: ''};
  constructor() { }

  ngOnInit(): void {
  }
  onAddCommentaire(){

    this.commentaire.date = new Date() ;
    this.commentaire.message = 'achour';
    this.comments.push(this.commentaire);

  }
}
