import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer : Subject<string> = new Subject<string> ();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder : string ='';

  @Input()
  public initialValue : string ='';
  /**
   * * Permite que se reciba información del componente hijo
   */
  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe ( value => {
      //console.log('debauncer value' , value);
      this.onDebounce.emit( value );
    })
  }

  // Destruye los componentes
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
    //console.log('destruiyendo')
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
