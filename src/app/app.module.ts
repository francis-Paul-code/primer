import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccessGuard } from './middleware/access.guard';
import { HttpIntInterceptor } from './middleware/http-int.interceptor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { NoteComponent } from './components/note/note.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NoteDetailComponent } from './pages/notes/detail/detail.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AddComponent } from './pages/add/add.component';
import { TaskComponent } from './components/task/task.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    HomeComponent,
    NoteComponent,
    NotesComponent,
    NoteDetailComponent,
    TasksComponent,
    AddComponent,
    TaskComponent,
    AddNoteComponent,
    AddTaskComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AccessGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
