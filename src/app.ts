import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

//home
app.get('/',(req: Request,res:Response, next: NextFunction) => {
    res.send('Hello world, hello!!');
});

app.listen(5000, () => console.log("Server running"));