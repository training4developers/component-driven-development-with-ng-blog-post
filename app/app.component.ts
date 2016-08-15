import { Component } from '@angular/core';
import { ListBox } from './list-box.component';

@Component({
  selector: 'my-app',
  template: `<list-box [items]="colors" (addItem)="addColor($event)">
      <header>
        <h1>List of Colors</h1>
      </header>
      <footer>
        <small>Source: Sample Color Institute</small>
      </footer>
    </list-box>`,
  directives: [ListBox]
})
export class AppComponent {

  colors = ['red','blue','green','yellow','orange'];

  addColor(newColor) {
    this.colors.push(newColor);
  }

}
