import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, DragScrollModule, NgbModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
