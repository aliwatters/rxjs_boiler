import $ from 'jquery';
import Rx from 'rxjs/Rx';

const source$ = Rx.Observable.interval(1000).take(10).map(v => v * v);

source$.subscribe(x => console.log(x));

const names$ = Rx.Observable
  .from([ 'fred', 'bill', 'alice', 'sally', 'mike' ])
  .map(v => v.toUpperCase())
  .map(v => 'I am ' + v);

names$.subscribe(v => console.log(v));

function getGithubUser(username) {
  return $
    .ajax({
      url: 'https://api.github.com/users/' + username,
      dataType: 'jsonp'
    })
    .promise();
}

Rx.Observable
  .fromPromise(getGithubUser('aliwatters'))
  .map(user => user.data.name)
  .subscribe(name => console.log(name));

const users = [
  { name: 'Arty', age: 44 },
  { name: 'Joe', age: 14 },
  { name: 'Emma', age: 31 },
  { name: 'Zoe', age: 23 }
];

const users$ = Rx.Observable.from(users);

users$.pluck('name').subscribe(x => console.log(x));
