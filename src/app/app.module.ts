import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SnackbarComponent } from './sample/snack';
import {Snackbar} from './sample/snackbar.service'
import {MatIcon, MatIconModule,MatIconRegistry} from '@angular/material/icon';
import {MatCardModule,MatCardImage} from '@angular/material/card'
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { RouComponent } from './rou/rou.component';
import { PostCreateComponent } from './posts/post-create/post-create-component'
import { HeaderComponent } from './Header/header';
import { PostListComponent } from './posts/Post-list/post-list-comp';
import { mod } from './posts/post-create/post-create-component';
import { mode2 } from './posts/post-create/post-create-component';
import { ClassroomComponent } from './classroom/classroom.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TableComponent } from './table/table.component';
import { BaseComponent, IntervalDirComponent, MyOutputComponent, testingApp } from './base/base.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    RouComponent,
    SnackbarComponent,
    PostCreateComponent,
    PostListComponent,
    mod,
    mode2,
  HeaderComponent,
  ClassroomComponent,
  SubjectsComponent,
  TableComponent,
  BaseComponent,
  IntervalDirComponent,
  MyOutputComponent,
  testingApp
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

    
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [Snackbar],
  bootstrap: [AppComponent]
})
export class AppModule { }
