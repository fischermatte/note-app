import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): Observable<User[]> {
    return of([
      {id: 1, lastname: 'Gates', firstname: 'Bill'},
      {id: 2, lastname: 'Jobs', firstname: 'Steve'},
      {id: 3, lastname: 'Mustermann', firstname: 'Max'}
    ]);
  }
}
