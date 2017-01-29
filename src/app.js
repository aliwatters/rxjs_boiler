import $ from 'jquery';
import Rx from 'rxjs/Rx';

const numbers = [ 33, 44, 55, 66, 77 ];

const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
  v => {
    console.log(v);
  },
  err => {
    console.log('Error', err);
  },
  complete => {
    console.log('Completed');
  }
);

const posts = [
  { title: 'post one', body: 'this is the body' },
  { title: 'post two', body: 'this is the body' },
  { title: 'post three', body: 'this is the body' },
  { title: 'post four', body: 'this is the body' }
];
const posts$ = Rx.Observable.from(posts);

posts$.subscribe(
  v => {
    console.log(v);
    $('#posts').append('<li><b>' + v.title + '</b> ' + v.body);
  },
  err => console.log(err),
  complete => console.log('COMPLETED')
);

const set = new Set(['Hello', 44, {title:'my title'}]);
const set$ = Rx.Observable.from(set);

set$.subscribe(
  v => console.log(v),
  err => console.log(err),
  complete => console.log('COMPLETED')
);


const map = new Map([[1,2], [3,4], [5,6]]);
const map$ = Rx.Observable.from(map);

map$.subscribe(
  v => console.log(v),
  err => console.log(err),
  complete => console.log('COMPLETED')
);
