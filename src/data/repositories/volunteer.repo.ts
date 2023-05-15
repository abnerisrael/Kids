import Volunteer from '../models/Volunteer.model';

export function list() {
  const jsonList = require('../src/volunteers.json');
  let volunters: Volunteer[] = [];
  volunters = jsonList.map(item => {
    return Object.assign(new Volunteer(), item);
  });
  return volunters;
}
