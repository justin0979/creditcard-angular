import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DateFormControl } from "../date-form-control";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.css"]
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    cardName: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    cardNumber: new FormControl("", [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    cardExpiration: new DateFormControl("", [
      Validators.required,
      Validators.pattern(/^([0-1]?\d{1})\/\d{2}$/)
    ]),
    cardSecurityCode: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern(/^\d{3}$/)
    ])
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.cardForm.value);
  }

  onClickReset() {
    this.cardForm.reset();
  }
}
