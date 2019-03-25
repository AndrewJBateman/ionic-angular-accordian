import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


/*
 * The data structure that will be used for supplying the accordion content
 */
public technologies: Array<{ name: string, description: string, image: string, link: string }> = [
    {
       name : 'Angular',
       description : 'Google\'s front-end development framework - default option for Ionic development',
       image: '/assets/images/angular-logo.png',
       link: 'https://angular.io/'
    },
    {
       name : 'VueJS',
       description : 'Latest cutting edge front-end development framework - can be enabled as an option for Ionic development',
       image: '/assets/images/vue-logo.png',
       link: 'https://vuejs.org/'
    },
    {
       name : 'React',
       description : 'Popular front-end development framework from Facebook- can be enabled as an option for Ionic development',
       image: 'assets/images/react-logo.png',
       link: 'https://reactjs.org/'
    },
    {
       name : 'TypeScript',
       description : 'Superset of JavaScript that provides class based object oriented programming and strict data typing',
       image: 'assets/images/typescript-logo.png',
       link: 'https://www.typescriptlang.org/'
    },
    {
       name : 'Ionic Native',
       description : 'Apache Cordova compatible plugins that allow native device API\'s to be utilised',
       image: 'assets/images/ionic-native-logo.png',
       link: 'https://ionicframework.com/'
    },
    {
       name : 'Capacitor',
       description : 'Plugins for Progressive Web App and hybrid app development',
       image: 'assets/images/capacitor-logo.png',
       link: 'https://capacitor.ionicframework.com/'
    },
    {
       name : 'StencilJS',
       description : 'Custom web component development framework',
       image: 'assets/images/stencil-logo.png',
       link: 'https://stenciljs.com/'
    },
    {
       name : 'Sass',
       description : 'CSS pre-processor development library',
       image: 'assets/images/sass-logo.png',
       link: 'https://sass-lang.com/'
    },
    {
       name : 'HTML5',
       description : 'Markup language and front-end API support',
       image: 'assets/images/html5-logo.png',
       link: 'https://www.w3.org/html/'
    },
    {
       name : 'Java',
       description : 'A high-level object-oriented programming language.',
       image: 'assets/images/java-logo.png',
       link: 'https://www.java.com'
    }
  ];

  constructor() {}

  /**
   * Captures and console logs the value emitted from the user depressing the accordion component's <ion-button> element
   */
  public captureName(event: any): void {
   console.log(`Captured name by event value: ${event}`);
  }

}
