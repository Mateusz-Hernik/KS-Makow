import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news';

@Component({
  selector: 'ksm-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css'],
  providers: [NewsService]
})

export class NewsViewComponent {
  public news: News;
  public newsId: number;

  constructor(private _newsService: NewsService, route: ActivatedRoute) {
    this.newsId = route.snapshot.params['id'];
  }
}
