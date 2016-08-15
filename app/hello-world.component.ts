import { Component } from '@angular/core';

@Component({
	selector: 'hello-world',
	template: `<h1>{{message}}</h1>`
})
export class HelloWorld {

	message = 'Hello World!';
	
}