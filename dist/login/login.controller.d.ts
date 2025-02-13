import { LoginService } from './login.service';
export declare class authController {
    private readonly loginService;
    constructor(loginService: LoginService);
    showLoginForm(): {
        registerScript: string;
    };
    login(body: {
        email: string;
        password: string;
    }): string;
    registerForm(): {};
    registerUser(body: {
        name: string;
        email: string;
        password: string;
    }): void;
}
