import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{

    signup() {
        return {
            message: 'signed up.'
        }
    }
    
    signin() {
        return 'signed in.'
    }
}