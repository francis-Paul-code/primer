import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './pages/notes/notes.component';
import { HomeComponent } from './pages/home/home.component';
import { NoteDetailComponent } from './pages/notes/detail/detail.component'
import { TasksComponent } from './pages/tasks/tasks.component';
import { AddComponent } from './pages/add/add.component';
const routes: Routes = [
  { path: '', component: HomeComponent,},
  { path: 'notes', component: NotesComponent },
  { path: 'notes/:id', component: NoteDetailComponent },
  { path: 'tasks', component: TasksComponent },
  {path:'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
