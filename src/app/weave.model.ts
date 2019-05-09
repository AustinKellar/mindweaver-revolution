import { User } from 'src/app/user.model';

export class Weave {
    id: string;
    title: string;
    purpose: string;
    members: User[];
    creator: User;
}
