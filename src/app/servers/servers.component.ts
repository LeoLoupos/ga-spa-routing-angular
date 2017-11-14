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
  submitScreenView() {
    this.googleAnalyticsEventsService.emitScreenView('testCategory', 'testAction', 'testLabel', 10);
    console.log('ScreenView Emmited');
  }
  submitTransaction() {
    this.googleAnalyticsEventsService.emitTransaction('testCategory', 'testAction', 'testLabel', 10);
    console.log('Transaction Emmited');
  }
  submitItem() {
    this.googleAnalyticsEventsService.emitItem('testCategory', 'testAction', 'testLabel', 10);
    console.log('Item Emmited');
  }
  submitSocial() {
    this.googleAnalyticsEventsService.emitSocial('testCategory', 'testAction', 'testTarget');
    console.log('Social Emmited');
  }
  submitException() {
    this.googleAnalyticsEventsService.emitException('testCategory', 'testAction');
    console.log('Exception Emmited');
  }
  submitTiming() {
    this.googleAnalyticsEventsService.emitTiming('testCategory', 'testAction', 'testLabel', 10);
    console.log('Timing Emmited');
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
