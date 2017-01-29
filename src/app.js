import $ from 'jquery';
import Rx from 'rxjs/Rx';

// // ugly
// Rx.Observable.of("Hello").subscribe(
//   // embedded double subscribe
//   v => Rx.Observable.of(v + " Everyone").subscribe(x => console.log(x))
// );
//
// // pretty
// Rx.Observable
//   .of("Hello")
//   .mergeMap(v => Rx.Observable.of(v + " Everyone"))
//   .subscribe(x => console.log(x));

function getUser(username) {
  return $
    .ajax({
      url: 'https://api.github.com/users/' + username,
      dataType: 'jsonp'
    })
    .promise();
}

const inputSource$ = Rx.Observable
  .fromEvent($('#input'), 'keyup')
  .map(e => e.target.value)
  .switchMap(v => Rx.Observable.fromPromise(getUser(v)));

inputSource$.subscribe(
  res => {
    $('#username').html(res.data.login);
    $('#name').html(res.data.name);
    $('#url').html(res.data.url);
  },
  err => console.log(err),
  complete => console.log('complete')
);
