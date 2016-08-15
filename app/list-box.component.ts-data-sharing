import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';

@Component({
	selector: 'list-box',
	template: `<ng-content select="header"></ng-content>
		<ul>
			<li *ngFor='let item of items'>{{item}}</li>
		</ul>
		<form>
			<label>New Item: <input [(ngModel)]="newItem" [ngModelOptions]="{standalone: true}" type="text"></label>
			<button (click)="addItem.emit(newItem); newItem = ''">Add</button>
		</form>
		<ng-content select="footer"></ng-content>`,
	directives: [FORM_DIRECTIVES]
})
export class ListBox {

	@Input()
	items = [];

	@Output()
	addItem = new EventEmitter();

}