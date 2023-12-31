import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = ""

  /*updateSearchText(event: any){
    this.searchText = event.target.value
  }*/

  //1. Create an event
  @Output() //4.
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  //Second argument {} of @ViewChild() - is optional and in there we can specify two properties: 1. read - used to read the different token from the queried element 2. static - determines when the query is resolved and it is always set to true by default
  @ViewChild('searchInput'/*, {static: true}*/) searchInputEl: ElementRef

  //3. Create a method
  /*onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText)
  }*/

  setSearchText(){
    //console.log(inputEl.value)
    this.searchText = this.searchInputEl.nativeElement.value
    this.searchTextChanged.emit(this.searchText)
  }
}
