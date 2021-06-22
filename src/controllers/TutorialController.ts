import { Request, Response } from "express";

class TutorialController {
    async hello(request: Request, response: Response) {
        response.json({message: 'Hello World!'})
    }
  }

  export { TutorialController };