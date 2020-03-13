import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { InputComponent } from "./input/input.component";
import { CardFormComponent } from "./card-form/card-form.component";

@NgModule({
  declarations: [AppComponent, InputComponent, CardFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
