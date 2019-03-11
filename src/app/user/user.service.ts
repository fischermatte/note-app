import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[];
  private subject: Subject<User[]>;

  constructor() {
    this.users = [
      {id: 1, lastname: 'Gates', firstname: 'Bill'},
      {id: 2, lastname: 'Jobs', firstname: 'Steve'},
      {id: 3, lastname: 'Mustermann', firstname: 'Max'}
    ];
    this.subject = new ReplaySubject<User[]>();
    this.subject.next(this.users);
  }

  getUsers(): Observable<User[]> {
    return this.subject.asObservable();
  }
}
