import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

btnStream$.subscribe(
  function(e) {
    console.log(e.target.innerHTML);
  },
  function(err) {
    console.log('error', err);
  },
  function() {
    console.log('Completed');
  }
);

const input = $('#input');
const output = $('#output');

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(
  function(e) {
    console.log(e.target.value);
    output.html(e.target.value);
  },
  function(err) {
    console.log('error', err);
  },
  function() {
    console.log('Completed');
  }
);


const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');

moveStream$.subscribe(
  function(e) {
    console.log(e.target.value);
    output.html('X:'+e.clientX+ ' Y: '+ e.clientY);
  },
  function(err) {
    console.log('error', err);
  },
  function() {
    console.log('Completed');
  }
);
