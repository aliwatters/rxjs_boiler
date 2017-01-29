import $ from 'jquery';
import Rx from 'rxjs/Rx';

Rx.Observable
  .of('hello')
  .merge(Rx.Observable.of('everyone'))
  .subscribe(x => console.log(x));

Rx.Observable
  .interval(2000)
  .merge(Rx.Observable.interval(500))
  .take(25)
  .subscribe(x => console.log(x));

const source1$ = Rx.Observable.interval(2000).map(v => 'Merge 1 ' + v);
const source2$ = Rx.Observable.interval(500).map(v => 'Merge 2 ' + v);

Rx.Observable.merge(source1$, source2$).take(25).subscribe(x => console.log(x));

const src1$ = Rx.Observable.range(0, 5).map(v => 'Source 1 ' + v);
const src2$ = Rx.Observable.range(6, 5).map(v => 'Source 2 ' + v);

Rx.Observable.concat(src1$, src2$).subscribe(x => console.log(x));
