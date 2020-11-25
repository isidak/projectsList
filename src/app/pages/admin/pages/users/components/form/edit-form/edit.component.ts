import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../../models/user.model';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {BaseFormComponent} from '../base-form/base-form.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditFormComponent extends BaseFormComponent implements OnInit, OnDestroy {

  @Input() user: UserModel;

  disableUpdateButton = true;
  fileToUpload: File = null;
  imageSrc: string | ArrayBuffer;

  private subscriptions = new Subscription();

  constructor(private fb: FormBuilder,
              private usersService: UsersService,
              private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
    this.checkUpdateButtonStatus();
    this.getCurrentUserByRoute();

  }

  checkUpdateButtonStatus(): void {
    const formChangeSub = this.form.valueChanges.subscribe(() => this.disableUpdateButton = false);
    this.subscriptions.add(formChangeSub);
  }

  getRouteId(): Observable<Params> {
    return this.route.params;
  }

  patchForm(user): void {
    this.form.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      status: user.status,
      image: user.image
    });
  }

  editUser(): void {
    const editUserSub = this.usersService.updateUser(this.form.value, this.user.id).subscribe();
    this.subscriptions.add(editUserSub);
    this.disableUpdateButton = true;
  }


  handleFileInput(files: File): void {

    this.fileToUpload = files[0];
    const reader = new FileReader();
    reader.onload = () => this.imageSrc = reader.result;
    reader.readAsDataURL(this.fileToUpload);
  }

  getCurrentUserByRoute(): void {
    const getUserSub = this.getRouteId().pipe(
      switchMap((res) => this.usersService.getUser(res.id))
    ).subscribe((res) => {
      this.user = {...res};
      this.patchForm(res);
    });
    this.subscriptions.add(getUserSub);
  }

  protected generateFG(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      status: [''],
      image: ['']
    });
  }


  ngOnDestroy(): void {
    this.usersService.setCurrentUser(null);
    this.subscriptions.unsubscribe();

  }


}
