# Ember-delay-value addon

This addon is extend to [ember-debounced-input](https://www.npmjs.com/package/ember-debounced-input-helpers)
## Installation
```
ember install ember-delay-value
```

##Demo
[Demo page](http://marucjmar.github.io/ember-delay-value)

## Components
The following components are available when you install ember-delay-value
![Demo](http://i.giphy.com/3oD3YNTofiARdX6IOk.gif)

## Basic

 ```
{{delay-input val=val }}
  ```

## delay-input

 ```
{{delay-input
    type={default:"text", ['textarea', 'number'...] }
    val=val
    sync=sync(boolean)
    horizontal=horizontal (boolean)
    reversePosition=reversePosition  (boolean)   
    reverseDirection=reverseDirection (boolean)
    expand=expand (boolean)
    delay=delay (number-time)
}}
  ```

## delay-block

 ```
    {{#delay-block val=val delay=delay sync=sync  as |value|}}
        {{input value=value}}
    {{/delay-block}}
  ```

- `val`: The bound value to be debounced]
- `delay`: Number of milliseconds to wait. Defaults to 500
- `val`: Usually debounced properties are one way, if you plan to manually update val, this will keep val and value in sync. Defaults to false.
- `type`: The type input
- `inputClass`: The class for the input in the container
- `horizontal`: Direction loader, when true(left to right), when false(bottom to top). Default: true
- `reversePosition`: Position loader in container, when true loader start from left , when false loader start from right. default: false
- `reverseDirection`: Loader reverse direction. Default: false





For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
