import {IClientBase} from "../client/client-base.interface";
import {IUserBase} from "../user/user-base.interface";

export interface ISignUpRequest {
    client: IClientBase;
    user: IUserBase;
}