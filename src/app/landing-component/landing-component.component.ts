import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.css']
})
export class LandingComponentComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  public register(): void {
  }

  public login(): void {
  }

  public emitSuccess(): void {
  }

}
