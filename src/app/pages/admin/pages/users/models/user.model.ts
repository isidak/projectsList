import {BaseUserModel} from './base-user.model';

export class UserModel extends BaseUserModel{
  address: string = null;
  status: string = null;
  image: string = null;

}
