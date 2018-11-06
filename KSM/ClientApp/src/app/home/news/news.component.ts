import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news';

@Component({
  selector: 'ksm-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  public newses: News[];

  constructor(private _newsService: NewsService) { }

  ngOnInit(): void {
    this.newses = this._newsService.getNews();
  }
}
