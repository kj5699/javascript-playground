# JavaScript Interview Questions Questionnaire

This document contains a comprehensive list of JavaScript interview questions categorized by type. Each question references the implementation file in this repository.

---

## Table of Contents
1. [Implementation-Based Questions](#implementation-based-questions)
   - [Async Patterns](#async-patterns)
   - [Design Patterns](#design-patterns)
   - [Utilities](#utilities)
2. [Output-Based Questions](#output-based-questions)
3. [Polyfills](#polyfills)
4. [Low-Level Design (LLD)](#low-level-design-lld)
5. [System Design](#system-design)
6. [Concept Understanding](#concept-understanding)

---

## Implementation-Based Questions

### Async Patterns

#### 1. Async Task Execution (Series vs Parallel)
**File:** `async-patterns/asyncSequence.js`

**Question:** Implement functions to execute async tasks in parallel and in series. Handle both results and errors from the tasks.

**Key Concepts:**
- Promise handling
- Concurrent vs Sequential execution
- Error aggregation

---

#### 2. Fetch with Rate Limiting
**File:** `async-patterns/FetchWithLimit.js`

**Question:** Implement a fetch wrapper that limits the number of concurrent API calls. If the limit is reached, queue the remaining calls and process them as slots become available.

**Key Concepts:**
- Concurrency control
- Queue management
- Promise handling
- API rate limiting

---

#### 3. Map with Concurrency Limit
**File:** `async-patterns/mapLimit.js`

**Question:** Implement a `mapLimit` function that processes an array of inputs with an async callback function, but limits the number of concurrent operations.

**Example:**
```javascript
mapLimit([1,2,3,4,5], 2, getUserById, callback)
// Should process max 2 concurrent requests at a time
```

**Key Concepts:**
- Async iteration
- Concurrency control
- Callback handling

---

#### 4. Promise Scheduler with Pause/Resume
**File:** `async-patterns/PromiseSchedulor.js`

**Question:** Create a PromiseScheduler class that can:
- Execute promises sequentially
- Pause execution at any point
- Resume from where it paused
- Start from a specific index
- Execute all remaining unexecuted tasks
- Get current state (paused/in-progress/completed)

**Key Concepts:**
- State management
- Promise orchestration
- Private methods
- Class design

---

### Design Patterns

#### 5. Circuit Breaker Pattern
**File:** `patterns/circuitBreaker.js`

**Question:** Implement a circuit breaker pattern that:
- Tracks failure count
- Opens circuit after N failures
- Blocks requests when circuit is open
- Automatically closes circuit after a timeout period

**Key Concepts:**
- Error handling
- Retry mechanisms
- Temporal logic
- Higher-order functions

---

#### 6. Singleton Pattern
**File:** `patterns/singleton.js`

**Question:** Implement the Singleton pattern to ensure only one instance of a class exists throughout the application lifecycle.

**Key Concepts:**
- IIFE (Immediately Invoked Function Expression)
- Closure
- Instance management

---

#### 7. Pub-Sub (Event Emitter) Pattern
**File:** `patterns/pub-sub.js`

**Question:** Create an EventEmitter class with `subscribe` and `publish` methods to implement the publish-subscribe pattern.

**Key Concepts:**
- Observer pattern
- Event-driven architecture
- Callback management

---

#### 8. Proxy Pattern
**File:** `patterns/proxy.js`

**Question:** Implement a Proxy to intercept and modify object operations (get, set, delete, etc.).

**Key Concepts:**
- JavaScript Proxy API
- Traps and handlers
- Object interception

---

#### 9. Resource Pool
**File:** `patterns/resourcePool.js`

**Question:** Design a Resource Pool that:
- Creates and manages a pool of reusable resources
- Tracks resources in use vs available
- Implements acquire/release mechanisms
- Supports automatic eviction of idle resources

**Key Concepts:**
- Resource management
- Connection pooling
- Memory optimization

---

### Utilities

#### 10. Custom setTimeout
**File:** `utilities/customSetTimeout.js`

**Question:** Implement your own `setTimeout` and `clearTimeout` functions using a queue-based approach.

**Key Concepts:**
- Timer management
- Queue data structure
- Scheduling

---

#### 11. Pipe/Compose Function
**File:** `utilities/pipe.js`

**Question:** Implement a `pipe` function that takes multiple functions and returns a new function that executes them in sequence, passing the output of each as input to the next.

**Key Concepts:**
- Function composition
- Array.reduce
- Higher-order functions

---

#### 12. Mutation Observer
**File:** `utilities/mutationObserver.js`

**Question:** Demonstrate usage of the MutationObserver API to track DOM changes (attributes, childList, subtree).

**Key Concepts:**
- DOM observation
- Browser APIs
- Event handling

---

#### 13. Debounce & Throttle
**File:** `debounce-throttle/index.js`

**Question:** Implement both debounce and throttle functions from scratch.

**Debounce:** Delays execution until after a specified time has passed since the last invocation.

**Throttle:** Ensures execution at most once per specified time interval.

**Key Concepts:**
- Timing control
- Closures
- setTimeout management

---

#### 14. Currency Converter with Graph Traversal
**File:** `utilities/currencyConverter.js`

**Question:** Build a currency converter that:
- Takes exchange rates as a string (e.g., "USD:CAD:1.25,AUD:CAD:0.94")
- Builds a graph of currency relationships
- Uses BFS/DFS to find conversion paths between any two currencies
- Handles indirect conversions (USD → CAD → AUD)

**Key Concepts:**
- Graph data structures
- BFS/DFS algorithms
- Map data structure

---

#### 15. Custom Cookie Property
**File:** `utilities/customCookie.js`

**Question:** Create a custom property `document.myCookie` using `Object.defineProperty` to get and set cookies in a cleaner way.

**Key Concepts:**
- Object.defineProperty
- Getters and setters
- Document.cookie API

---

## Output-Based Questions

**File:** `outputs/index.js`

These questions test your understanding of JavaScript execution, event loop, closures, and async behavior.

---

#### 16. Promise Chain with Error Handling
**Question:** Predict the output of a promise chain with multiple `.then()` and `.catch()` handlers.

```javascript
promise
  .then(function(data){
    if(data !== 'expected'){
      throw 'Defeat'
    }
    return job(true)
  })
  .then(...)
  .catch(...)
  .then(...)
```

**Key Concepts:**
- Promise chaining
- Error propagation
- Catch recovery

---

#### 17. Event Loop & Microtask Queue
**Question:** Predict the output order of console.logs with setTimeout, Promises, and synchronous code.

```javascript
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve(3).then(res => {
  console.log(res);
  setTimeout(() => console.log(7), 100);
});
console.log(6);
```

**Key Concepts:**
- Call stack
- Microtask queue
- Macrotask queue
- Event loop

---

#### 18. Closures & Variable Scope
**Question:** Understand closure behavior with nested functions and variable access.

```javascript
function outer(){
  function inner(){
    return () => abc(12)
  }
  var a = 10;
  function abc(b){
    console.log(a, b)
  }
  return inner;
}
```

**Key Concepts:**
- Lexical scoping
- Closure
- Function hoisting

---

#### 19. Array.map with parseInt
**Question:** What is the output?

```javascript
var arr1 = [100, 100, 100];
console.log(arr1.map(parseInt));
```

**Answer:** `[100, NaN, 4]`

**Key Concepts:**
- map callback signature: `(value, index, array)`
- parseInt signature: `parseInt(string, radix)`
- Understanding implicit parameters

---

#### 20. setTimeout in Loop with var vs let
**Question:** Explain the difference between using `var` and `let` in a loop with setTimeout.

**Key Concepts:**
- Block scope vs function scope
- Closure in loops
- IIFE solutions

---

#### 21. Infinite Curry Implementation
**Question:** Implement a curry function that can handle infinite arguments:

```javascript
curriedJoin(1)(2,3)(4)() // "1_2_3_4"
curriedJoin(1)(2)(3)(4)() // "1_2_3_4"
```

**Key Concepts:**
- Currying
- Recursion
- Function arguments

---

## Polyfills

**File:** `polyfills/index.js`

Implement polyfills for common JavaScript methods and APIs.

---

#### 22. Promise Polyfill
Implement a custom Promise class with:
- Constructor with executor function
- `.then()` method
- `.catch()` method
- State management (pending, fulfilled, rejected)

---

#### 23. Promise.all Polyfill
Implement `Promise.all()` that:
- Resolves when all promises resolve
- Rejects immediately if any promise rejects
- Returns array of results in order

---

#### 24. Promise.allSettled Polyfill
Implement `Promise.allSettled()` that waits for all promises to settle (either resolved or rejected) and returns their results.

---

#### 25. Function.prototype.call Polyfill
Implement `myCall` that mimics the behavior of the native `call` method.

**Key Concepts:**
- Context binding
- `this` keyword
- Object.assign

---

#### 26. Function.prototype.bind Polyfill
Implement `myBind` that returns a new function with bound context and partial arguments.

**Key Concepts:**
- Partial application
- Context binding
- Closure

---

#### 27. Array.prototype.map Polyfill
Implement `myMap` that mimics Array.map behavior.

---

#### 28. Array.prototype.reduce Polyfill
Implement `myReduce` with initial value handling.

---

#### 29. Array.prototype.forEach Polyfill
Implement `myForEach` that iterates over array elements.

---

#### 30. Array.prototype.flat Polyfill
Implement `myFlat` to flatten nested arrays recursively.

---

#### 31. Object.flatten
Implement a function to flatten nested objects:

```javascript
const obj = {
    a: 'jack',
    b: {
        c: 'sparrow',
        d: {
           e: 'hahaha'
        }
    }
}
// Output: { 'a': 'jack', 'b.c': 'sparrow', 'b.d.e': 'hahaha' }
```

---

## Low-Level Design (LLD)

### 32. File System
**File:** `lld/fileSystem.js`

**Question:** Design an in-memory file system that supports:
- Creating files and directories
- Navigating paths (e.g., "/documents/photos")
- Listing directory contents
- Deleting files/directories

**Classes:**
- `File`
- `Directory`
- `FileSystem`

**Key Operations:**
- `createFile(path, name)`
- `createDirectory(path, name)`
- `delete(path)`
- `list(path)`

**Key Concepts:**
- Tree data structure
- Path parsing
- Object-oriented design

---

### 33. Order Management System
**File:** `lld/orderManagement.js`

**Question:** Design an e-commerce order management system with:

**Classes:**
- `Product` - with id, name, price, stock
- `CartItem` - product + quantity
- `Cart` - manages cart items
- `Order` - order details and status
- `User` - user profile with cart and orders
- `Payment` - payment processing

**Key Operations:**
- Add/remove products to cart
- Calculate cart value
- Check product availability
- Place order
- Manage stock

**Key Concepts:**
- OOP principles
- Business logic
- State management

---

### 34. Rate Limiter
**File:** `interview-questions/rateLimiter.js`

**Question:** Implement a Rate Limiter class that:
- Limits requests per client
- Tracks requests within a time window
- Returns true/false for whether request is allowed

**Example:** Limit to 100 requests per second per client

**Key Concepts:**
- Sliding window algorithm
- Request throttling
- Map data structure

---

### 35. Middleware Implementation
**File:** `interview-questions/middleware-thoughtspot.js`

**Question:** Implement a middleware system similar to Express.js with:
- `use(callback)` - adds middleware to queue
- `go(callback)` - executes the final callback
- Sequential execution with `next()` calls
- Async support

**Key Concepts:**
- Middleware pattern
- Queue management
- Callback orchestration

---

## System Design

### 36. State Normalization
**File:** `system-design/normalization/index.js`

**Question:** Normalize nested state structure for better performance and easier updates.

**Problem:** Given nested user-posts structure, normalize it to flat structure with references.

**Before:**
```javascript
{
  users: [
    {id: 1, name: 'User1', posts: [{id: 101, data: '...'}]}
  ]
}
```

**After:**
```javascript
{
  users: { byIds: {1: {name: 'User1'}} },
  posts: { byIds: {101: {data: '...', userId: 1}} }
}
```

**Key Concepts:**
- State management
- Data normalization
- Performance optimization
- O(1) vs O(n) lookups

---

## Concept Understanding

### 37. Understanding `this` Keyword
**File:** `this/index.js`

**Questions:**
1. What is the value of `this` in global scope?
2. What is `this` inside a regular function? (strict vs non-strict mode)
3. What is `this` inside an object method?
4. What is `this` inside an arrow function?
5. How does `this` behave with arrow functions in objects?
6. What is `this` inside setTimeout callback?
7. How does `this` work with nested functions vs arrow functions?

**Key Concepts:**
- `this` binding rules
- Arrow functions vs regular functions
- Lexical scope
- `this` substitution
- Function borrowing with call/apply/bind

---

### 38. Promises Deep Dive
**File:** `promises/index.js`, `promises/CustomPromise.js`

**Topics Covered:**
1. How to use promises
2. Creating custom promises
3. Promise chaining
4. Promise.all vs Promise.allSettled vs Promise.race vs Promise.any
5. Custom Promise implementation with states
6. Async/await under the hood
7. Microtask queue
8. Error handling in promise chains

---

### 39. DOM Manipulation
**File:** `dom/index.js`

**Questions:**
1. Difference between `append()` and `appendChild()`
2. Difference between `innerText` and `textContent`
3. How to create and add elements to DOM

---

## Practice Problems

### 40. Company-Specific Problems

**Tekion Interview Questions:**
**File:** `interview-questions/tekion.js`, `interview-questions/tekion2.js`

Topics covered:
- Async/await execution order
- String subsequences generation
- Infinite currying
- Curry implementation
- Promise chain output prediction
- Closure examples
- Event loop questions

---

## Quick Reference

### Difficulty Levels

**Easy:**
- Debounce/Throttle
- Array polyfills (map, forEach, reduce)
- DOM manipulation
- Basic Promise usage

**Medium:**
- Custom Promise implementation
- Circuit Breaker
- Rate Limiter
- mapLimit
- Curry/Compose functions
- Singleton pattern
- Pub-Sub pattern

**Hard:**
- Promise Scheduler
- Resource Pool
- File System Design
- Order Management System
- Fetch with rate limiting
- Currency Converter with graph traversal
- Middleware implementation

---

## How to Use This Questionnaire

1. **For Interview Preparation:**
   - Start with Easy questions to build fundamentals
   - Move to Medium for common interview questions
   - Practice Hard questions for senior positions

2. **For Practice:**
   - Each question has a working implementation
   - Try to solve without looking at the code first
   - Compare your solution with the implementation
   - Understand the key concepts

3. **For Revision:**
   - Use this as a checklist
   - Review output-based questions before interviews
   - Practice explaining concepts in simple terms

---

## Additional Resources

- Read the code in each file
- Run the examples to see output
- Modify the code to test edge cases
- Add your own test cases

---

**Last Updated:** November 2025

**Total Questions:** 40+ covering all major JavaScript interview topics

