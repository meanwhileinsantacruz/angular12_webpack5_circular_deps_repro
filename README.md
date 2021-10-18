# Angular 12 'ng build' issue with circular dependencies

This is the angular starter kit app with a small data model that contains circular dependencies.\
The *ng build* command hangs building this app.

## Data model
The data model is a simple a set of 13 classes that have references to each other.\
Note that there are actually no *constructor* references.\
Maybe the *internal module pattern* should be called to the rescue, but the Typescript compiler does not complain.

## Reproduce 

```
npm install
ng build
```

## Drill Down

The command hangs and there is no output - even with the verbose flag.\

Running node in debug mode can provide some context.\ 
It seems like webpack is stuck in a loop when tree shaking at **NormalModule.js#getSideEffectsConnectionState**.\

A workaround is to set the *sideEffects* flag in the *package.json* file.\
**What dazzles me is that both 'true' and 'false' values make the problem disappear.**
