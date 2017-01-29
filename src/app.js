import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source$ = Rx.Observable.interval(200).take(5);

source$.subscribe(
  x => console.log(x),
  err => console.log(err),
  complete => console.log('complete')
);

const timer$ = Rx.Observable.interval(1000, 200).take(5);

timer$.subscribe(
  x => console.log(x),
  err => console.log(err),
  complete => console.log('complete')
);

const range$ = Rx.Observable.range(10, 10);

range$.subscribe(
  x => console.log(x),
  err => console.log(err),
  complete => console.log('complete')
);
