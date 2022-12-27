import { Component } from '@angular/core';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent {

  color: string = '#FFFFFF';
  changeColor(event: any): void {
    this.color = event.target.value;
  }
}
