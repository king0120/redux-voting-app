import {expect} from 'chai';
import {List, Map} from 'immutable';

//this is a Learning test!
describe('immutability', () => {
  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);
      //immutable means that the original state will not be changed
      //the pure function simply takes the state value and creates a separate and new state
      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });
});

describe('A List', () => {
  function addMovie(currentState, movie) {
    return currentState.push(movie);
  }

  it('is immutable', () => {
    let state = List.of('Trainspotting', '28 Days Later');
    let nextState = addMovie(state, 'Sunshine');

    expect(nextState).to.equal(List.of('Trainspotting', '28 Days Later', 'Sunshine'));
    expect(state).to.equal(List.of('Trainspotting', '28 Days Later'));

  })

})

describe('a tree', () => {
  function addMovie(currentState, movie) {
    // return currentState.set(
    //   'movies',
    //   currentState.get('movies').push(movie)
    // );
    return currentState.update('movies', movies => movies.push(movie));
  }
  it('is immutable', () => {
    let state = Map({
      movies: List.of('Trainspotting', '28 Days Later')
    });
    let nextState = addMovie(state, 'Sunshine');

    expect(nextState).to.equal(Map({
      movies: List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      )
    }));
    expect(state).to.equal(Map({
      movies: List.of(
        'Trainspotting',
        '28 Days Later'
      )
    }));
  });

})