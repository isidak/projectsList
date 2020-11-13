import {animate, animation, keyframes, style} from '@angular/animations';

export const transAnimation = animation([
  animate(1000, keyframes([
      style({
        transform: 'translateX(-25%) scale(0.75) rotate(360deg)',
        opacity: 0.5,
      }),
      style({
        transform: 'translateX(-50%) scale(0.25) rotate(620deg)',
        opacity: 0.5,
      }),
      style({
        transform: 'translateX(-100%) scale(0) rotate(900deg)',
        opacity: 0,
      })
    ]
  )),
]);
