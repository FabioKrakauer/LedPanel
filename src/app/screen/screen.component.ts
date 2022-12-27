import { Component } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})

export class ScreenComponent {
  
  panelSize: number = 0;
  panelsQuantity: number = 3;

  panels: number[] = [];

  generatePanels(): void {
    this.panels = []
    for(let i = 0; i < this.panelSize; i++) {
      this.panels.push(i);
    }
  }
  updateSize(event: Event): void {
    this.panelSize = <number><unknown>((<HTMLInputElement>event.target).value)
  }
}
