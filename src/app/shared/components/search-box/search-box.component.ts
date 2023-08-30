import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {

  private debouncer : Subject<string> = new Subject<string> ();

  @Input()
  public placeholder : string ='';

  /**
   * * Permite que se reciba información del componente hijo
   */
  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe ( value => {
      //console.log('debauncer value' , value);
      this.onDebounce.emit( value );
    })
  }

  emitValue(value:string):void {
    this.onValue.emit(value);
  }

  // Debouncer para esperar un poco
  onKeyPress (searchTerm: string) {
    this.debouncer.next(searchTerm);
    //console.log(searchTerm);
  }
}
