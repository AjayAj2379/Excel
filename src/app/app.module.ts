import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule,
        MatInputModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
       MatButtonModule,
      MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxChartsModule} from '@swimlane/ngx-charts'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ExcelComponent } from './xcel/excel/excel.component';
import { NngxChartsComponent } from './charts/nngx-charts/nngx-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ExcelComponent,
    NngxChartsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
