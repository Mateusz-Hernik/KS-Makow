"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var QueueBaseComponent = /** @class */ (function () {
    function QueueBaseComponent() {
        this.isAlertDisplayed = false;
    }
    QueueBaseComponent.prototype.createFormControls = function () {
        this.number = new forms_1.FormControl('', forms_1.Validators.required);
        this.seasonId = new forms_1.FormControl('', forms_1.Validators.required);
        this.startDate = new forms_1.FormControl('');
        this.endDate = new forms_1.FormControl('');
    };
    QueueBaseComponent.prototype.createForm = function () {
        this.queueForm = new forms_1.FormGroup({
            number: this.number,
            seasonId: this.seasonId,
            startDate: this.startDate,
            endDate: this.endDate
        });
    };
    QueueBaseComponent.prototype.resetForm = function () {
        this.number.reset();
        this.seasonId.reset();
        this.startDate.reset();
        this.endDate.reset();
    };
    QueueBaseComponent.prototype.areDatesCorrect = function () {
        return (this.startDate.value && this.endDate.value && this.startDate.value < this.endDate.value);
    };
    QueueBaseComponent.prototype.displayConfirmAlert = function () {
        this.isAlertDisplayed = true;
        this.resetForm();
        setTimeout(function () {
            this.isAlertDisplayed = false;
        }.bind(this), 5000);
    };
    return QueueBaseComponent;
}());
exports.QueueBaseComponent = QueueBaseComponent;
//# sourceMappingURL=queue.base.js.map