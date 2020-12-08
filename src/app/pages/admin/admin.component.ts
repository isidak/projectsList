import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from 'my-lib';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from 'my-lib';
import {BaseUserModel} from 'my-lib';
import {AuthService} from './pages/users/services/auth/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  currentUser: BaseUserModel;

  private subscriptions = new Subscription();

  constructor(private usersService: UsersService,
              private modalService: NgbModal,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    const currentUserSub = this.authService.currentUser.subscribe((user) => this.currentUser = user);
    this.subscriptions.add(currentUserSub);
  }

  login(): void {
    this.openModal();
  }

  logout(): void {
    this.authService.currentUser.next(null);
    this.router.navigate(['admin/users/list']);
  }

  openModal(): void {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.result.then(
      () => {},
      () => {}
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
