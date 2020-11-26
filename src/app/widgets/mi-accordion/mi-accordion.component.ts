import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-accordion',
	templateUrl: './mi-accordion.component.html',
	styleUrls: ['./mi-accordion.component.scss'],
})
export class MiAccordionComponent implements OnInit {
	/**
	 * The name of the technology that will be displayed as the title for the accordion header
	 */
	@Input()
	name: string;

	/**
	 * The description of the technology that will be displayed within the accordion body (when activated
	 * by the user)
	 */
	@Input()
	description: string;

	/**
	 * The official logo identifying the technology that will be displayed within the accordion body (when activated
	 * by the user)
	 */
	@Input()
	image: string;

	/**
	 * The change event that will be broadcast to the parent component when the user interacts with the component's
	 * <ion-button> element
	 */
	@Output()
	change: EventEmitter<string> = new EventEmitter<string>();

	/**
	 * Determines and stores the accordion state (I.e. opened or closed)
	 */
	public isMenuOpen = false;

	constructor() {}

	ngOnInit() {}

	/**
	 * Allows the accordion state to be toggled (I.e. opened/closed)
	 */
	public toggleAccordion(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}

	/**
	 * Allows the value for the <ion-button> element to be broadcast to the parent component
	 */
	public broadcastName(name: string): void {
		this.change.emit(name);
	}
}
