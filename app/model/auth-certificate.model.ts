import { User } from "./user.model";

export class AuthCertificate {
    id?: number;
    email?: User;
    password?: User;
    valid: boolean = false;
}