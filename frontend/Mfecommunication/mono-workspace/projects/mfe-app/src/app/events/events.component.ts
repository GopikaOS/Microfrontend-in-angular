import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  @Input() childMessage?: string;
  // Output property to emit event to parent component
  @Output() childEvent = new EventEmitter<string>();
  // Method to handle some action and emit event to parent component
  emitEvent() {
    this.childEvent.emit('Employee registered successfully');
  }

}
