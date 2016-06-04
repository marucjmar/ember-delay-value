import Ember from 'ember';

export default Ember.Controller.extend({
  horizontal: true,
  vehicle: null,
   vehicles: Ember.String.w('Tesla Chrysler Toyota'),
   delay: 1000,
   sync:true,
   actions: {
     selectVehicle(vehicle) {
       this.set('vehicle', vehicle);
     }
   }
});
