import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'landing-component',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @Output()
  public onSuccess: EventEmitter<any> = new EventEmitter();

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
    // for now
    this.emitSuccess();
  }

  public login(): void {
    // for now
    this.emitSuccess();
  }

  public emitSuccess(): void {
    this.onSuccess.emit('logged');
  }

}
