import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

declare var ga: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.toString());
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
  // submitEvent() {
  //   this.googleAnalyticsEventsService.emitEvent("testCategory", "testAction", "testLabel", 10);
  // }

}
