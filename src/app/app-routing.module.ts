import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NoteComponent} from './note/note.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/notes', pathMatch: 'full' },
    { path: 'notes', component: NoteComponent },
  ])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
