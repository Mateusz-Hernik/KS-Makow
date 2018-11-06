import { FormGroup, FormControl, Validators } from "@angular/forms";

export abstract class SeasonBaseComponent {
  public isAlertDisplayed: boolean = false;
  public seasonForm: FormGroup;
  public name: FormControl;
  public startDate: FormControl;
  public endDate: FormControl;

  constructor() { }

  createFormControls() {
    this.name = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.startDate = new FormControl('');
    this.endDate = new FormControl('');
  }

  createForm() {
    this.seasonForm = new FormGroup({
      name: this.name,
      startDate: this.startDate,
      endDate: this.endDate
    });
  }

  resetForm() {
    this.name.reset();
    this.startDate.reset();
    this.endDate.reset();
  }

  areDatesCorrect(): boolean {
    return (this.startDate.value && this.endDate.value && this.startDate.value < this.endDate.value);
  }

  displayConfirmAlert() {
    this.isAlertDisplayed = true;
    this.resetForm();

    setTimeout(function () {
      this.isAlertDisplayed = false;
    }.bind(this), 5000);
  }
}
