import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/modules/Auth/services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  error = false;
  private subscriptions = new Subscription();

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  login(): void {
    const loginSub = this.authService.login(this.form.value.email).subscribe(() => {
        this.form.reset();
        this.activeModal.close();
      }, () => {
        this.error = true;
      }
    );
    this.subscriptions.add(loginSub);
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
