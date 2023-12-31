import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;

  selectedFilterRadioButton: string = "all"

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>()

  onSelectedFilterRadioButtonChanged(){
    //console.log(this.selectedFilterRadioButton)
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
  }
}
