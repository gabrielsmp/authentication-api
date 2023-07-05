import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository";
import DatabaseError from "../models/errors/database.error.model";

// get /users
const usersRoute = Router();
usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUser();
    res.status(StatusCodes.OK).send({ users });
});

// get /users/:uuid
usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid;
        const user = await userRepository.findById(uuid);
        res.status(StatusCodes.OK).send({ user });
    } catch (error) {
        next(error);
    }
});

// post /users
usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.create(newUser);
    res.status(StatusCodes.CREATED).send(newUser);
});

// put /users/:uuid 
usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUsers = req.body;

    modifiedUsers.uuid = uuid;

    await userRepository.update(modifiedUsers);

    res.status(StatusCodes.OK).send();
});

//  delete /users/:uuid
usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    await userRepository.remove(uuid);
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;