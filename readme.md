# vue-fast

a simple library for use vuex easily

```sh
yarn add vuex-fast
```

## use in vue2

```js
import vuexFast from "vuex-fast";

const modules = vuexFast({
  a: moduleA,
  b: moduleB
});

const store = new Vuex.Store({ modules });
```

## use in vue3

```js
import vuexFast from "vuex-fast";

import { createStore } from "vuex";

const modules = vuexFast({
  a: moduleA,
  b: moduleB
});

const store = createStore({ modules });
```
