import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 // Input property to receive data from parent component
 @Input() parentMessage?: string;
 // Output property to emit event to parent component
 @Output() messageEvent = new EventEmitter<string>();
  ngOnInit(): void {

  }


submit(){
  console.log("employee registered sucessfully")
  // library that stored in local storage or session storage
}
sendMessage() {
  // Emitting event with message
  this.messageEvent.emit(this.parentMessage);
}
handleChildEvent(eventData: string) {
  console.log('Event emitted by child component:', eventData);
  alert(eventData);
}
}


