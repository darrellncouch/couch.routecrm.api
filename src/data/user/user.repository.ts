import { PrismaClient } from '../../../prisma/generated/prisma'
import {Service} from "couch-routes/decorators";
import { IUserBase } from '../../../core/interfaces/user/user-base.interface';
import {IUser} from "../../../core/interfaces/user/user.interface";

@Service()
export class UserRepository {

    private readonly prisma = new PrismaClient();

    // constructor(private readonly prisma: PrismaClient) {
    // }

    public async getAll(): Promise<IUser[]> {
        const users = await this.prisma.user.findMany();
        this.prisma.$disconnect()
        return users;
    }

    public async getUser(id: string): Promise<IUser> {
        return await this.prisma.user.findFirstOrThrow({
            where: {
                id: id
            }
        });
    }

    // public async getUsers(request: IPagedRequest): Promise<IUser[]> {
    //     const result = await this.prisma.user.findMany();
    //
    //     await this.prisma.$disconnect();
    //
    //     return result;
    // }

    public async create(user: IUserBase): Promise<IUser> {
        const userCreate = await this.prisma.user.create({data: user});
        return userCreate as IUser;
    }

    // public async update(user: IUser): Promise<IUser> {
    //     return await this.prisma.user.update(user);
    // }
}