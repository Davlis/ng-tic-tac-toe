import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'landing-component',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public registerForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
    nickname: ['', [Validators.required], Validators.minLength(8), Validators.maxLength(16)]
  });

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
  });

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
  }

  public register(): void {
  }

  public login(): void {
  }

  public emitSuccess(): void {
  }

}
