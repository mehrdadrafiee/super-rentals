import Ember from 'ember';

let rentals = [{
  id: 'grand-old-mansion',

}, {
  id: 'urban-living',

}, {
  id: 'downtown-charm',
  
}];

export default Ember.Route.extend({
  model() {
    return rentals;
  }
});
