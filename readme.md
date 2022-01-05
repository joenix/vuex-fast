# vue-fast

a simple library for use vuex easily

```sh
yarn add vuex-fast
```

## init in vue2

```js
import vuexFast from 'vuex-fast';

const modules = vuexFast({
  a: moduleA,
  b: moduleB,
});

const store = new Vuex.Store({ modules });
```

## init in vue3

```js
import vuexFast from 'vuex-fast';

import { createStore } from 'vuex';

const modules = vuexFast({
  a: moduleA,
  b: moduleB,
});

const store = createStore({ modules });
```

## use

```js
// State
numeric: {
  a: 10,
  b: 20
}

// Action
calculate() {
  return {
    numeric: {
      a: 100,
      b: a + 200
    }
  }
}

// Use
this.$store.dispatch('calculate');
console.log(this.$store.state.numeric); // { a: 100, b: 300 }
```
