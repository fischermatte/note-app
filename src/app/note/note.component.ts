import {Component, OnInit} from '@angular/core';
import {NoteService} from './note.service';
import {UserService} from '../user/user.service';
import {combineLatest} from 'rxjs';
import {map, mergeMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-note',
  template: `
    <h2>Notes</h2>
    <form #f="ngForm" (ngSubmit)="addUser()" novalidate>
      <input [(ngModel)]="note" name="noteInput" required>
      <button [disabled]="f.invalid">Add Note</button>
    </form>
    <ul>
      <li *ngFor="let n of notes">
        {{n.text}} (by user {{n.firstname}}  {{n.lastname}})
      </li>
    </ul>
  `,
  styles: []
})
export class NoteComponent implements OnInit {

  private currentUserId = 3;
  note: string;
  notes: Note[];

  constructor(private noteService: NoteService, private userService: UserService) {
    // noteService.getNotes().pipe(
    // mergeMap(notes => {
    //   return this.userService.getUsers().pipe(
    //     tap(users => this.loadUserInfo(notes, users)),
    //     map(() => notes)
    //   );
    // })
    // ).subscribe(notes => this.notes = notes);
    combineLatest([this.noteService.getNotes(), this.userService.getUsers()])
      .subscribe(results => {
        this.notes = this.loadUserInfo(results[0], results[1]);
      });
  }

  ngOnInit() {
  }

  addUser() {
    this.noteService.addNote({
      userId: this.currentUserId,
      text: this.note
    });
    this.note = '';
  }

  private loadUserInfo(notes: Note[], users: User[]): Note[] {
    notes.forEach(note => {
      const user = users.filter(u => u.id === note.userId)[0];
      note.firstname = user.firstname;
      note.lastname = user.lastname;
    });
    return notes;
  }
}
