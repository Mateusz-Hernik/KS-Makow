import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Season } from '../../../models/season';
import { Observable } from 'rxjs/Observable';
import { SeasonService } from '../../../services/season.service';
import { Router, NavigationEnd } from '@angular/router';
import { SeasonBaseComponent } from '../../../abstract/season.base';

@Component({
  selector: 'ksm-admin-season',
  templateUrl: './admin-season.component.html',
  styleUrls: ['./admin-season.component.css'],
  providers: [SeasonService]
})
export class AdminSeasonComponent extends SeasonBaseComponent implements OnInit, OnDestroy {

  public seasons: Observable<Season[]>;
  navigationSubscription: any;

  constructor(private _seasonService: SeasonService, private router: Router) {
    super();
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.getSeasons();
  }

  ngOnInit() {
    this.getSeasons();
    this.createFormControls();
    this.createForm();
  }

  getSeasons() {
    this.seasons = this._seasonService.getSeasons();
  }

  deleteSeason(seasonId: number) {
    this._seasonService.deleteSeason(seasonId).then(
      (res) => {
        if (res) {
          // OK
        } else {
          // TODO error catch
          alert("BŁĄD DODAWANIA SEZONU");
        }
      }
    );
  }

  saveSeason() {
    if (this.seasonForm.valid && this.areDatesCorrect()) {
      this._seasonService.addSeason(new Season(null, this.name.value, this.startDate.value, this.endDate.value, null)).then(
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

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
