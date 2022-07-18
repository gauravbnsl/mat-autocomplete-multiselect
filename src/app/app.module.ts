import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiselectAutocompleteComponent } from './components/multiselect-autocomplete/multiselect-autocomplete.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MultiselectAutocompleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
