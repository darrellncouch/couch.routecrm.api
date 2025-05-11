import { Service } from "couch-routes/decorators";
import { UserRepository } from "../data/user/user.repository";
import { IUserBase } from "../../core/interfaces/user/user-base.interface";
import { IUser } from "../../core/interfaces/user/user.interface";

@Service()
export class UserService {

    constructor(private userRepo: UserRepository) {
    }

    public async createUser(user: IUserBase): Promise<IUser> {
        return await this.userRepo.create(user);
    }
}