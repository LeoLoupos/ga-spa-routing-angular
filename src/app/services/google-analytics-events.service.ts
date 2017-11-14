import {Injectable} from '@angular/core';

declare var ga: any;


@Injectable()
export class GoogleAnalyticsEventsService {

  public emitEvent(eventCategory: string,
                   eventAction: string,
                   eventLabel: string = null,
                   eventValue: number = null) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });

    // Example
    // ga('send', {
    //   hitType: 'event',
    //   eventCategory: 'Video',
    //   eventAction: 'play',
    //   eventLabel: 'cats.mp4'
    // });
  }

  public emitScreenView(screenName: string,
                        appName: string,
                        appId: string = null,
                        appVersion: number = null,
                        appInstallerId: number = null) {
    ga('send', 'screenview', {
      screenName : screenName,
      appName : appName,
      appId : appId,
      appVersion : appVersion,
      appInstallerId : appInstallerId
    });
  }

  public emitTransaction(eventCategory: string,
                   eventAction: string,
                   eventLabel: string = null,
                   eventValue: number = null) {
    ga('send', 'transaction', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }

  public emitItem( eventCategory: string,
                   eventAction: string,
                   eventLabel: string = null,
                   eventValue: number = null) {
    ga('send', 'item', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }

  public emitSocial(socialNetwork: string,
                    socialAction: string,
                    socialTarget: string = null) {
    ga('send', 'social', {
      socialNetwork: socialNetwork,
      socialTarget: socialTarget,
      socialAction: socialAction
    });
  }

  public emitException(exDescription: string,
                       exFatal: string,
                  ) {
    ga('send', 'exception', {
      exDescription: exDescription,
      exFatal: exFatal
    });
  }

  public emitTiming(timingCategory: string,
                    timingVar: string,
                    timingValue: string = null,
                    timingLabel: number = null) {
    ga('send', 'timing', {
      timingCategory: timingCategory,
      timingVar: timingVar,
      timingValue: timingValue,
      timingLabel: timingLabel
    });
  }

//   ga('send', {
//   hitType: 'timing',
//   timingCategory: 'JS Dependencies',
//   timingVar: 'load',
//   timingValue: 3549
// });
}
