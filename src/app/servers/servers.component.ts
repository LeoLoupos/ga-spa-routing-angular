import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {GoogleAnalyticsEventsService} from './../services/google-analytics-events.service';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) { }

  submitEvent() {
    this.googleAnalyticsEventsService.emitEvent('testCategory', 'testAction', 'testLabel', 10);
    console.log('Event Emmited');
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
