import { Component } from '@angular/core';
import { MatchService } from '../../../services/match.service';
import { Match } from '../../../models/match';

@Component({
  selector: 'ksm-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  providers: [MatchService]
})

export class BadgeComponent {
  public nextMatch: Match;
  public previousMatch: Match;
  public isNextMatchActive: boolean;

  constructor(private _matchService: MatchService) { }

  ngOnInit(): void {
    this.nextMatch = this._matchService.getNextMatch();
    this.previousMatch = this._matchService.getPreviousMatch();
    this.isNextMatchActive = true;
  }

  setNextMatchActive(): void {
    this.isNextMatchActive = true;
  }

  setPreviousMatchActive(): void {
    this.isNextMatchActive = false;
  }
}
