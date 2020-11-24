import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() currentUser: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
