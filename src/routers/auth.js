import express from 'express';
import { getuser, getuserById, signup } from '../controllers/auth';


const router = express.Router();

router.post('/signup', signup);

router.get('/getacc', getuser);

router.get('/getacc/:email', getuserById);

export default router;