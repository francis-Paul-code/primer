import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './pages/notes/notes.component';
import { HomeComponent } from './pages/home/home.component';
import { NoteDetailComponent } from './pages/notes/detail/detail.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AddComponent } from './pages/add/add.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccessGuard } from './middleware/access.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: 'home', component: HomeComponent, canActivate: [AccessGuard] },
  { path: 'notes', component: NotesComponent, canActivate: [AccessGuard] },
  {
    path: 'notes/:id',
    component: NoteDetailComponent,
    canActivate: [AccessGuard],
  },
  { path: 'tasks', component: TasksComponent, canActivate: [AccessGuard] },
  { path: 'add', component: AddComponent, canActivate: [AccessGuard] },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
