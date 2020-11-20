import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TodoListComponent} from '../../../todo/components/list/todo-list.component';
import {ListComponent} from './components/list/list.component';
import {CreateComponent} from './components/create/create.component';
import {Subscription} from 'rxjs';
import {EditComponent} from './components/edit/edit.component';
import {UserModel} from './models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  @ViewChild('dynamicContainer', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<any>;
  currentUser: UserModel = null;
  private subscriptions = new Subscription();

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
  }

  createComponent(componentName): void {
    switch (componentName) {
      case 'list':
        this.createListComponent();
        break;
      case 'newUser':
        this.createCreateComponent();
        break;
      default:
        break;
    }


  }

  private createListComponent(): void {
    this.container.clear();
    this.currentUser = null;
    const factory: ComponentFactory<ListComponent> = this.resolver.resolveComponentFactory(ListComponent);
    this.componentRef = this.container.createComponent(factory);
    const editSub = this.componentRef.instance.editedUser$.subscribe((res) => {
      if (res) {
        this.createEditComponent(res);
      }
    });
    this.subscriptions.add(editSub);
  }

  private createCreateComponent(): void {
    this.container.clear();
    this.currentUser = null;
    const factory: ComponentFactory<CreateComponent> = this.resolver.resolveComponentFactory(CreateComponent);
    this.componentRef = this.container.createComponent(factory);
  }

  private createEditComponent(user): void {
    this.container.clear();
    this.currentUser = user;
    const factory: ComponentFactory<EditComponent> = this.resolver.resolveComponentFactory(EditComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.user = user;
    const userSavedSub = this.componentRef.instance.userSaved.subscribe(() => this.createListComponent());
    this.subscriptions.add(userSavedSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


}

