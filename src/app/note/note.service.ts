import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[];
  private subject: Subject<Note[]>;

  constructor() {
    this.notes = [
      {userId: 1, text: 'Note 1'},
      {userId: 2, text: 'Note 2'},
      {userId: 2, text: 'Note 3'}
    ];
    this.subject = new BehaviorSubject<Note[]>(this.notes);
  }

  getNotes(): Observable<Note[]> {
    return this.subject.asObservable();
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.subject.next(this.notes);
  }
}
