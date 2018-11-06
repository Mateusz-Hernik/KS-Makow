import { Component, OnInit } from '@angular/core';
import { Season } from '../../models/season';
import { Queue } from '../../models/queue';
import { SeasonService } from '../../services/season.service';
import { QueueService } from '../../services/queue.service';

@Component({
  selector: 'ksm-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
  providers: [SeasonService, QueueService]
})
export class TimetableComponent implements OnInit {

  public newestSeason: Season = new Season(null, null, null, null, null);
  public seasons: Season[] = [];
  public queues: Queue[] = [];

  constructor(private _seasonService: SeasonService, private _queueService: QueueService) { }

  ngOnInit() {
    this._seasonService.getSeasons().subscribe(
      res => {
        this.seasons = res;
        if (this.seasons.length > 0) {
          this.newestSeason = this.seasons[0];
          this.getSeasonQueues(this.newestSeason.id);
        }
      });
  }

  getSeasonQueues(seasonId: number) {
    this._queueService.getSeasonQueues(seasonId).subscribe(res => this.queues = res);
  }

}
