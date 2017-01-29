import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source$ = new Rx.Observable(observer => {
  console.log('Creating Observable');

  observer.next('hello johnny');

  setTimeout(() => observer.next('hello alice'), 1000);
  // observer.error(new Error('ERROR: forced error'));
  setTimeout(() => observer.next('hello freddy'), 3000);
  setTimeout(() => observer.complete(), 4000);
});

source$
  .catch(err => Rx.Observable.of(err))
  .subscribe(
    x => {
      $('#out').html(x);
      console.log(x);
    },
    err => console.log(err),
    complete => console.log('complete')
  );
