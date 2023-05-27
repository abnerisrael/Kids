/* eslint-disable prettier/prettier */
import Volunteer from '../../data/models/Volunteer.model';
import * as volunteerRepo from '../../data/repositories/volunteer.repo';

const list = (): Volunteer[] => {
    return volunteerRepo.list();
};

const VolunteerUseCase = {
    list,
};

export default VolunteerUseCase;
