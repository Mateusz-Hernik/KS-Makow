import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './common/nav-menu/nav-menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { NewsComponent } from './home/news/news.component';
import { BadgeComponent } from './home/badge/badge.component';
import { TableComponent } from './home/table/table.component';
import { NewsViewComponent } from './newses/news-view/news-view.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthorizationGuard } from '../guards/auth.guard';
import { AuthService } from '../services/auth.service';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminSeasonComponent } from './admin/admin-season/admin-season.component';
import { AdminSeasonEditComponent } from './admin/admin-season/admin-season-edit/admin-season-edit.component';
import { AdminQueueComponent } from './admin/admin-queue/admin-queue.component';
import { TimetableComponent } from './timetable/timetable.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    NewsComponent,
    BadgeComponent,
    TableComponent,
    NewsViewComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminNavComponent,
    AdminSeasonComponent,
    AdminSeasonEditComponent,
    AdminQueueComponent,
    TimetableComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'terminarz', component: TimetableComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'news/:id', component: NewsViewComponent },
      { path: 'admin/login', component: LoginComponent },
      { path: 'admin/home', component: AdminHomeComponent, canActivate: [AuthorizationGuard], runGuardsAndResolvers: 'always' },
      { path: 'admin/season', component: AdminSeasonComponent, canActivate: [AuthorizationGuard], runGuardsAndResolvers: 'always' },
      { path: 'admin/season/:id', component: AdminSeasonEditComponent, canActivate: [AuthorizationGuard], runGuardsAndResolvers: 'always' },
      { path: 'admin/queue', component: AdminQueueComponent, canActivate: [AuthorizationGuard], runGuardsAndResolvers: 'always' }

    ], { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule],
  providers: [AuthorizationGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
