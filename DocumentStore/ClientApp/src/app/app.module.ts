import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './components/insert/insert.component';
import { UpdateComponent } from './components/update/update.component';
import { DetailsComponent } from './components/details/details.component';
import { DisplayComponent } from './components/display/display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentService } from './services/documents/document.service';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    UpdateComponent,
    DetailsComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
