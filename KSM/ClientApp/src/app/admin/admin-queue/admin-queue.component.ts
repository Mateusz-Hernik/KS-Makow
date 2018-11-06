import { Component, OnInit, OnDestroy } from '@angular/core';
import { QueueBaseComponent } from '../../../abstract/queue.base';
import { Router, NavigationEnd } from '@angular/router';
import { Queue } from '../../../models/queue';
import { Observable } from 'rxjs/Observable';
import { QueueService } from '../../../services/queue.service';

@Component({
  selector: 'ksm-admin-queue',
  templateUrl: './admin-queue.component.html',
  styleUrls: ['./admin-queue.component.css'],
  providers: [QueueService]
})
export class AdminQueueComponent extends QueueBaseComponent implements OnInit, OnDestroy {

  public queues: Observable<Queue[]>;
  navigationSubscription: any;

  constructor(private _queueService: QueueService, private router: Router) {
    super();
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.getQueues();
  }

  ngOnInit() {
    this.getQueues();
    this.createFormControls();
    this.createForm();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getQueues() {
    this.queues = this._queueService.getQueues();
  }
}
