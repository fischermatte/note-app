import {Component, OnInit} from '@angular/core';
import {NoteService} from './note.service';
import {UserService} from '../user/user.service';

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
        {{n.text}} (by user {{n.userId}})
      </li>
    </ul>
  `,
  styles: []
})
export class NoteComponent implements OnInit {

  private currentUserId = 3;
  note: string;
  notes: Note[];

  constructor(private noteService: NoteService, private UserService: UserService) {
    noteService.getNotes().subscribe(notes => this.notes = notes);
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

}
