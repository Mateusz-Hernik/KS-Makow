import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../../../../services/season.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Season } from '../../../../models/season';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';
import { SeasonBaseComponent } from '../../../../abstract/season.base';

@Component({
  selector: 'ksm-admin-season-edit',
  templateUrl: './admin-season-edit.component.html',
  styleUrls: ['./admin-season-edit.component.css'],
  providers: [SeasonService]
})
export class AdminSeasonEditComponent extends SeasonBaseComponent implements OnInit {

  public season: Season;
  private seasonId: number;

  constructor(private _seasonService: SeasonService, private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.seasonId = this.route.snapshot.params['id'];

    this._seasonService.getSeason(this.seasonId).then(
      res => {
        this.season = res;
      }
    );

    this.createFormControls();
    this.createForm();
  }

  updateSeason() {
    if (this.seasonForm.valid && this.areDatesCorrect()) {
      this._seasonService.updateSeason(this.season).then(
        (res) => {
          if (res) {
            // OK
          } else {
            // TODO error catch
            alert("BŁĄD DODAWANIA SEZONU");
          }
        }
      );
      this.displayConfirmAlert();
    }
  }
}
