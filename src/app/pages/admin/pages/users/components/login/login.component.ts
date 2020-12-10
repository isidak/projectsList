import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AbstractFormComponent} from 'users-admin-lib';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AbstractFormComponent implements OnInit, OnDestroy {

  error = false;
  private subscriptions = new Subscription();

  constructor(public activeModal: NgbActiveModal,
              public fb: FormBuilder,
              public authService: AuthService) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
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

  protected generateFormGroup(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
