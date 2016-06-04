import Ember from 'ember';
const {
  run,
  isEqual,
  observer,
  addObserver,
  removeObserver
} = Ember;

export default Ember.Mixin.create({
  type: "text",
  classNames: ['delay-container'],
  classNameBindings: ['vertical:vertical:horizontal','reversePosition:reverse-position','reverseDirection:reverse-direction', "expand:expand"],
  isTextarea: Ember.computed.equal('type', 'textarea'),
  horizontal: true,
  vertical: Ember.computed.not('horizontal'),
  reversePosition:false,
  reverseDirection: false,
  expand: false,

  /**
   * Number of milliseconds to delay.
   * @type {Number}
   */
  delay: 500,

  /**
   * Trigger the function on the leading instead of the trailing edge of the delay interval. Defaults to false.
   * @type {Boolean}
   */
  immediate: false,

  /**
   * Usually debounced properties are one way, if you plan to manually update val, this will keep val and value in sync
   * @type {Boolean}
   */
  sync: false,

  /**
   * Bound value to be debounced
   */
  val: null,

  /**
   * Raw value
   */
  value: null,

  init() {
    this._super(...arguments);
    this.set('value', this.get('val'));
    if(this.sync) {
      addObserver(this, 'val', this, this._sync);
    }
    this.addObserver('value', this.onValueChange)
  },

  addSyncObserver: Ember.observer('sync', function(){
    if (this.get('sync')){
      addObserver(this, 'val', this, this._sync);
    }else{
      removeObserver(this, 'val', this, this._sync);
    }
  }),

  cssProperty: Ember.computed('horizontal',function(){
    return this.get('horizontal') ? "width" : "height"
  }),

  onValueChange(){
    this._valuePid = run.debounce(this, this._setVal, this.delay, this.immediate);
    var property = this.get('cssProperty')
    this.$().find('.loader').stop(false, false).css({
      [property]: "0px"
    }).animate({
      [property]: '100%'
    }, parseInt(this.delay), function(){
      $(this).css({[property]: ""})
    })
  },

  _sync() {
    if(!this.isDestroying && !this.isDestroyed && !isEqual(this.get('val'), this.get('value'))) {
      this.removeObserver('value', this.onValueChange)
      this.set('value', this.get('val'));
      this.addObserver('value', this.onValueChange)
    }
  },

  _setVal() {
    if(!this.isDestroying && !this.isDestroyed) {
      this.set('val', this.get('value'));
    }
  },

  /**
   * Cleanup by canceling any current debounce
   */
  willDestroy() {
    this._super(...arguments);
    run.cancel(this._valuePid);
    if(this.sync) {
      removeObserver(this, 'val', this, this._sync);
    }
  }
});
