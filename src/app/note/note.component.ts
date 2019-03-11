import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-note',
  template: `
    <h2>Notes</h2>
    <form #f="ngForm" (ngSubmit)="addUser()" novalidate>
      <input name="noteInput">
      <button>Add Note</button>
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

  constructor() {
  }

  ngOnInit() {
  }

  addUser() {
    this.notes.push({
      userId: this.currentUserId,
      text: this.note
    });
    this.note = '';
  }
}
