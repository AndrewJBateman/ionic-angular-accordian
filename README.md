# :zap: Ionic Angular Accordian

* App to create a simple accordian widget using the [Ionic 5 framework](https://ionicframework.com/docs).
* Accordions are often used in the UI for grouping and display of related information.
* Tutorial code from [Mastering Ionic](https://masteringionic.com/) - see [:clap: Inspiration](#clap-inspiration) below.

## :page_facing_up: Table of contents

* [:zap: Ionic Angular Accordian](#zap-ionic-angular-accordian)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Added to the `app.module.ts` is a [CUSTOM_ELEMENTS_SCHEMA](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA) allows custom component to be recognised by Angular when transpiling the code

## :camera: Screenshots

![Home Page](./img/accordion.png)

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Ionic/angular v5](https://www.npmjs.com/package/@ionic/angular)
* [Angular v11](https://angular.io/)

## :floppy_disk: Setup

* To start the server on _localhost://8100_ type: 'ionic serve' or on _localhost://4200_ type: 'ng serve'

## :computer: Code Examples

* extract from `home.page.html`: for loop used to display info on each technology from the simple array created in the ts file.

```html
<ion-content padding>
	<app-accordion
		*ngFor="let technology of technologies"
		name="{{ technology.name }}"
		description="{{ technology.description }}"
		image="{{ technology.image }}"
		(change)="captureName($event)"
	></app-accordion>
</ion-content>
```

## :cool: Features

* Data is stored in an array of objects but this could be replaced with json data from an API call.
* Use of `@input` to pass current name, description & image link strings from `home` to the accordian widget
* Updated to latest Ionic/Angular versions with dependency updates and all dependency vulnerabilities resolved.

## :clipboard: Status & To-do list

* Status: Working widget, accordion opens and data is accessed from the array and displayed.
* To-do: work out how to add html links inside the accordion, maybe by using a function.

## :clap: Inspiration

Project inspired by [Mastering Ionic's 'Creating a simple accordion widget in Ionic 4'](http://masteringionic.com/blog/2019-01-27-creating-a-simple-accordion-widget-in-ionic-4/).

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
