import {Component, OnDestroy} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnDestroy {

  private subscriptions = new Subscription();

  constructor(public userService: UsersService,
              private router: Router) {
  }

  addUser(user): void {
    const addUserSub = this.userService.addUser(user).subscribe((res) => {
      this.router.navigate(['admin/users/edit/', res.id ]);
    });
    this.subscriptions.add(addUserSub);

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
