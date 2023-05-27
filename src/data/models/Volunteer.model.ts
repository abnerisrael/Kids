import iVolunteer from '../interfaces/iVolunteer.interface';
export default class Volunteer implements iVolunteer {
  id: number;
  nome: string;
  avatarUrl: string;
}
