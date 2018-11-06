import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news';

@Component({
  selector: 'ksm-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NewsService]
})
export class SliderComponent implements OnInit {
  public newses: News[];

  constructor(private _newsService: NewsService) { }

  ngOnInit() {
    this.newses = this._newsService.getTopNews();
  }
}
