import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private fb: FormBuilder,
    public routes: ActivatedRoute,
    private authservice: AuthService) { }

  isLoading = false;

  myform!: FormGroup;

  ngOnInit(): void {
    this.myform = this.fb.group({
      'inputUsername': this.fb.control('', [Validators.required]),
      'inputPassword': this.fb.control('hello', [Validators.required]),
    });
  }

  onLogin() {

    if (this.myform.invalid) {
      return;
    }
    console.log(this.myform.value);
    this.authservice.userlogin(this.myform.value.inputUsername, this.myform.value.inputPassword);
  }

}
