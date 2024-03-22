# cutest-animations

Cute Animations is a CSS & JS library for web on scroll/load animations.

The package containes animations that will be render once the component entered the user's viewport.

All the animations are customizables.


## Install 📖

> Install the package.

- npm
```bash
npm install cutest-animations
```

> Implementation

- Css stylesheet link.
```html
<link rel="stylesheet" href="node_modules/cutest-animations/src/animations.css">
```

- JS link.
```html
<script src="node_modules/cutest-animations/src/index.js"></script>
```


## Usage ⚙️

> Examples. 
```html
<h1 data-animate="fade-bottom" data-animate-duration="1000" data-animate-timing="ease-in" 
    data-animate-delay="250">
    Hello world
</h1>

<div data-animate="fade-top-left" data-animate-duration="1000" data-animate-timing="ease" 
    data-animate-delay="500">
    Cute Ease-in Fade top with 500ms delay animation
</div>

<div data-animate="zoom-out" data-animate-duration="1000" data-animate-timing="ease-in-out" 
    data-animate-delay="750">
    Cute Ease-in-out Zoom out with 750ms delay animation
</div>
```

* By default, duration and delay will be render in miliseconds.


## Animations available 🐰

* Blur.
```html
    data-animate="blur"
```

* Fade in.
```html
    data-animate="fade-in"
```

* Fade left.
```html
    data-animate="fade-left"
```

* Fade right.
```html
    data-animate="fade-right"
```
* Fade top.
```html
    data-animate="fade-top"
```

* Fade bottom.
```html
    data-animate="fade-bottom"
```

* Fade top right.
```html
    data-animate="fade-top-right"
```

* Fade top left.
```html
    data-animate="fade-top-left"
```

* Fade bottom right.
```html
    data-animate="fade-bottom-right"
```

* Fade bottom left.
```html
    data-animate="fade-bottom-left"
```

* Flip left.
```html
    data-animate="flip-left"
```

* Flip right.
```html
    data-animate="flip-right"
```

* Flip top.
```html
    data-animate="flip-top"
```

* Flip bottom.
```html
    data-animate="flip-bottom"
```

* Jump.
```html
    data-animate="jump"
```

* Pulse
```html
    data-animate="flip-right"
```

* Rotate left.
```html
    data-animate="rotate-left"
```

* Rotate right.
```html
    data-animate="rotate-right"
```

* Squish.
```html
    data-animate="squish"
```

* Zoom in.
```html
    data-animate="zoom-in"
```

* Zoom out.
```html
    data-animate="zoom-out"
```


## Customization 🎨

- On your CSS or SASS file add your custom animation.
```css
    @keyframes custom-animation {
        from {
            background-color:red;
        }
        to {
            opacity: 100%
            background-color:blue;
        }
```

- On your element, add "data-animate" with your custom animation.
```html
    <div data-animate="custom-animation">
        My custom animation
    </div>
```


## Fixes

* cutes-animations still in early develop. Feel free to contact "agustinmusumeci" to fix any bug.
