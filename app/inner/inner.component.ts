import { Component, OnInit ,Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
@Input() outername :string
/*when u receive a property from upper components u use input*/
@Output() eventFromInner =new EventEmitter<string>();

/*when u emit an event to upper components u use output*/
  constructor() { }

  ngOnInit() {
  }

  sendToOuter(){
    console.log('clicked');
    this.eventFromInner.emit(this.outername);
  }

}
