import { FormControl } from "@angular/forms";

export class CardNumberFormControl extends FormControl {
  setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.match(/[^0-9|-]/)) {
      super.setValue(this.value, {
        ...options,
        emitModelToViewChange: true
      });
      return;
    }

    if (value.length > 19) {
      super.setValue(this.value, {
        ...options,
        emitModelToViewChange: true
      });
      return;
    }

    if (
      value.length === 4 ||
      value.length === 9 ||
      value.length === 14
    ) {
      super.setValue(value + "-", {
        ...options,
        emitModelToViewChange: true
      });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
