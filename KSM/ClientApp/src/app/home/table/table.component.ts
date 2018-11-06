import { Component } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { Team } from '../../../models/team';

@Component({
  selector: 'ksm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TeamService]
})

export class TableComponent {
  public teams: Team[];

  constructor(private _teamService: TeamService) { }

  ngOnInit(): void {
    this.teams = this._teamService.getTeams();
  } 
}
