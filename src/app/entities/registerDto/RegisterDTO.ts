import { UserRole } from '../enums/RoleEnums';

export class RegisterDTO {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public token: string,
        public role: UserRole
    ) {}
}