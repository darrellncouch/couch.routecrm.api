import {IClientBase} from "./client-base.interface";

export interface IClient extends IClientBase {
    id: string;
    createdOn: string;
}