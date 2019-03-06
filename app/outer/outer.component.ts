import { Component, OnInit,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {

  constructor() { }
  /*the belowmost component to  which data has 
  to be passed  should contain @Input()  decorator alongwith the property which contains the data
  sent from components above it */
  @Input() xyz;
  @Output() eventFromOuter =new EventEmitter<string>();

  name:string='';
  
  ngOnInit() {
  }

  eventFromInner(passed :string){
    this.name=passed;
    this.eventFromOuter.emit(this.name);
  }
}
