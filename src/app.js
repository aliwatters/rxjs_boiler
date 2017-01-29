import $ from 'jquery';
import Rx from 'rxjs/Rx';

const myPromise = new Promise((resolve, reject) => {
  console.log('creating promise');
  setTimeout(() => resolve('Hello from promise'), 3000);
});

// myPromise.then(x => console.log(x));
const source$ = Rx.Observable.fromPromise(myPromise);

source$.subscribe(x => console.log(x));

function getUser(username) {
  return $
    .ajax({
      url: 'https://api.github.com/users/' + username,
      dataType: 'jsonp'
    })
    .promise();
}

const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup');

inputSource$.subscribe(e => {
  console.log(e.target.value);
  Rx.Observable.fromPromise(getUser(e.target.value)).subscribe(
    res => {
      $('#username').html(res.data.login);
      $('#name').html(res.data.name);
      $('#url').html(res.data.url);
    },
    err => console.log(err),
    complete => console.log('complete')
  );
});
