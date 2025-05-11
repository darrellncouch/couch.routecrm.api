import {Controller, Get} from "couch-routes/decorators";
import { Request, Response } from "express";

@Controller("Client")
export class ClientController {

    @Get("")
    public test(req: Request, res: Response): void {
        console.log(req);
        res.send("Bark");
    }
}