import {IUserBase} from "./user-base.interface";
import {IRole} from "../roles/role.interface";

export interface IUser extends IUserBase {
    id: string;
    createdOn: Date;
    roles?: Array<IRole>;
}