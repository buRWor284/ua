---
title: "JavaScript Module Patterns"
date: "2017-01-17"
excerpt: "How JavaScript module patterns evolved from IIFEs to ES modules, and why it matters for the code you write today."
tags: ["javascript", "frontend", "architecture"]
---

Before ES6 modules were widespread, JavaScript developers invented several patterns to keep code organized and avoid polluting the global scope. Understanding these patterns helps you read older codebases — and appreciate how much cleaner things are today.

## The IIFE (Immediately Invoked Function Expression)

```javascript
(function() {
  var privateVar = "I'm private";

  window.myModule = {
    doSomething: function() {
      console.log(privateVar);
    }
  };
})();
```

The outer function creates a private scope. Only what you explicitly attach to `window` (or a passed-in object) becomes public.

## The Revealing Module Pattern

```javascript
var Counter = (function() {
  var count = 0;

  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
})();

Counter.increment();
console.log(Counter.getCount()); // 1
```

Cleaner than the previous pattern — you define everything privately, then explicitly return the public API.

## CommonJS (Node.js)

```javascript
// math.js
function add(a, b) { return a + b; }
module.exports = { add };

// main.js
const { add } = require('./math');
```

## ES Modules (the standard now)

```javascript
// math.js
export function add(a, b) { return a + b; }

// main.js
import { add } from './math.js';
```

Static imports mean bundlers can do tree-shaking — stripping out code you never actually use. That's a big win for bundle size.

If you're starting a new project, use ES modules. For everything else, knowing the old patterns will keep you from being confused when you encounter them.
