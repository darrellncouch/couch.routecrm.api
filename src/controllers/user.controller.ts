import {Controller, Post} from "couch-routes/decorators";
import { Request, Response } from "express";
import { UserService } from "../logic/user.service";
import { IUserBase } from "../../core/interfaces/user/user-base.interface";

@Controller('/user')
export class UsersController {

    constructor(private readonly userService: UserService) {}

    @Post("/")
    public async create(req: Request, res: Response): Promise<void> {
        const user: IUserBase = req.body;

        if(!user){
            res.sendStatus(400);
            return;
        }

        const response = await this.userService.createUser(user);
        res.send(response);
    }
}