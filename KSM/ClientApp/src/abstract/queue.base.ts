import { FormGroup, FormControl, Validators } from "@angular/forms";

export abstract class QueueBaseComponent {

  public isAlertDisplayed: boolean = false;
  public queueForm: FormGroup;
  public number: FormControl;
  public seasonId: FormControl;
  public startDate: FormControl;
  public endDate: FormControl;

  constructor() { }

  createFormControls() {
    this.number = new FormControl('', Validators.required);
    this.seasonId = new FormControl('', Validators.required);
    this.startDate = new FormControl('');
    this.endDate = new FormControl('');
  }

  createForm() {
    this.queueForm = new FormGroup({
      number: this.number,
      seasonId: this.seasonId,
      startDate: this.startDate,
      endDate: this.endDate
    });
  }

  resetForm() {
    this.number.reset();
    this.seasonId.reset();
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
