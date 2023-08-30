import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder : string ='';

  /**
   * * Permite que se reciba información del componente hijo
   */
  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value:string):void {
    this.onValue.emit(value);
  }
}
