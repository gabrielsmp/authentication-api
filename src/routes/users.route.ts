import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

// get /users
const usersRoute = Router();
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Gabriel' }];
    res.status(StatusCodes.OK).send({ users });
});

// get /users/:uuid
usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

// post /users
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    console.log('req.body');
    res.status(StatusCodes.CREATED).send(newUser);
});

// put /users/:uuid 
usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUsers = req.body;

    modifiedUsers.uuid = uuid; 

    res.status(StatusCodes.OK).send(modifiedUsers);
});

//  delete /users/:uuid
usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;