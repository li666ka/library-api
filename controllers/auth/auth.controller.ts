import { Request, Response } from 'express';

import CreateUserDto from './dto/create_user.dto';
import LoginUserDto from './dto/login_user.dto';

import AuthService from '../../services/auth.service';

class AuthController {
	public static async createUser(
		req: Request<never, never, CreateUserDto>,
		res: Response<string>
	) {
		try {
			const token: string = await AuthService.register(req.body, 'user');
			res.json(token);
		} catch (err: unknown) {
			console.log(err.message);
			res.sendStatus(400);
		}
		return;
	}

	public static async createModerator(
		req: Request<never, never, CreateUserDto>,
		res: Response<string>
	) {
		try {
			const token: string = await AuthService.register(req.body, 'moderator');
			res.json(token);
		} catch (err: unknown) {
			console.log(err.message);
			res.sendStatus(400);
		}
		return;
	}

	public static async createAdmin(
		req: Request<never, never, CreateUserDto>,
		res: Response<string>
	) {
		try {
			const token: string = await AuthService.register(req.body, 'admin');
			res.json(token);
		} catch (err: unknown) {
			console.log(err.message);
			res.sendStatus(400);
		}
		return;
	}

	public static async login(
		req: Request<never, never, LoginUserDto>,
		res: Response<string>
	) {
		try {
			console.log(req.body);
			const token: string = await AuthService.login(req.body);
			res.json(token);
		} catch (err: unknown) {
			console.log(err.message);
			res.sendStatus(400);
		}
		return;
	}
}

export default AuthController;
