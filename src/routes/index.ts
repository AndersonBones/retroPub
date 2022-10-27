import { Request, Response, Router } from "express";
import {Main} from '../controllers/mainController';

const router = Router();

router.get('/', Main)

export default router
