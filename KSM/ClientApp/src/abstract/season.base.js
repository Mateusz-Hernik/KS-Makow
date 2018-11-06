"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var SeasonBaseComponent = /** @class */ (function () {
    function SeasonBaseComponent() {
        this.isAlertDisplayed = false;
    }
    SeasonBaseComponent.prototype.createFormControls = function () {
        this.name = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(10)]);
        this.startDate = new forms_1.FormControl('');
        this.endDate = new forms_1.FormControl('');
    };
    SeasonBaseComponent.prototype.createForm = function () {
        this.seasonForm = new forms_1.FormGroup({
            name: this.name,
            startDate: this.startDate,
            endDate: this.endDate
        });
    };
    SeasonBaseComponent.prototype.resetForm = function () {
        this.name.reset();
        this.startDate.reset();
        this.endDate.reset();
    };
    SeasonBaseComponent.prototype.areDatesCorrect = function () {
        return (this.startDate.value && this.endDate.value && this.startDate.value < this.endDate.value);
    };
    SeasonBaseComponent.prototype.displayConfirmAlert = function () {
        this.isAlertDisplayed = true;
        this.resetForm();
        setTimeout(function () {
            this.isAlertDisplayed = false;
        }.bind(this), 5000);
    };
    return SeasonBaseComponent;
}());
exports.SeasonBaseComponent = SeasonBaseComponent;
//# sourceMappingURL=season.base.js.map