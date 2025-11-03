# Quick Reference Guide

Quick lookup table for all questions in this repository.

## 📑 Table of Contents

- [By Category](#by-category)
- [By Difficulty](#by-difficulty)
- [By Concept](#by-concept)
- [By Company](#by-company)

---

## By Category

### Async Patterns

| # | Question | File | Difficulty |
|---|----------|------|------------|
| 1 | Async Parallel/Series Execution | `async-patterns/asyncSequence.js` | ⭐⭐ |
| 2 | Fetch with Rate Limiting | `async-patterns/FetchWithLimit.js` | ⭐⭐⭐ |
| 3 | Map with Concurrency Limit | `async-patterns/mapLimit.js` | ⭐⭐ |
| 4 | Promise Scheduler (Pause/Resume) | `async-patterns/PromiseSchedulor.js` | ⭐⭐⭐ |

### Design Patterns

| # | Question | File | Difficulty |
|---|----------|------|------------|
| 5 | Circuit Breaker | `patterns/circuitBreaker.js` | ⭐⭐ |
| 6 | Singleton | `patterns/singleton.js` | ⭐ |
| 7 | Pub-Sub (Event Emitter) | `patterns/pub-sub.js` | ⭐⭐ |
| 8 | Proxy Pattern | `patterns/proxy.js` | ⭐⭐ |
| 9 | Resource Pool | `patterns/resourcePool.js` | ⭐⭐⭐ |

### Utilities

| # | Question | File | Difficulty |
|---|----------|------|------------|
| 10 | Custom setTimeout | `utilities/customSetTimeout.js` | ⭐⭐ |
| 11 | Pipe/Compose | `utilities/pipe.js` | ⭐⭐ |
| 12 | Mutation Observer | `utilities/mutationObserver.js` | ⭐ |
| 13 | Debounce & Throttle | `debounce-throttle/index.js` | ⭐ |
| 14 | Currency Converter (Graph) | `utilities/currencyConverter.js` | ⭐⭐⭐ |
| 15 | Custom Cookie | `utilities/customCookie.js` | ⭐ |

### Polyfills

| # | Question | Difficulty |
|---|----------|------------|
| 22 | Promise | ⭐⭐ |
| 23 | Promise.all | ⭐⭐ |
| 24 | Promise.allSettled | ⭐⭐ |
| 25 | Function.call | ⭐⭐ |
| 26 | Function.bind | ⭐⭐ |
| 27 | Array.map | ⭐ |
| 28 | Array.reduce | ⭐ |
| 29 | Array.forEach | ⭐ |
| 30 | Array.flat | ⭐⭐ |
| 31 | Object.flatten | ⭐⭐ |

**File:** `polyfills/index.js`, `promises/CustomPromise.js`

### Low-Level Design

| # | Question | File | Difficulty |
|---|----------|------|------------|
| 32 | File System | `lld/fileSystem.js` | ⭐⭐⭐ |
| 33 | Order Management System | `lld/orderManagement.js` | ⭐⭐⭐ |
| 34 | Rate Limiter | `interview-questions/rateLimiter.js` | ⭐⭐ |
| 35 | Middleware | `interview-questions/middleware-thoughtspot.js` | ⭐⭐ |

### Output-Based Questions

| # | Question | File | Key Concept |
|---|----------|------|-------------|
| 16 | Promise Chain Output | `outputs/index.js` | Promise chaining |
| 17 | Event Loop Order | `outputs/index.js` | Microtask/Macrotask |
| 18 | Closures | `outputs/index.js` | Lexical scope |
| 19 | Array.map(parseInt) | `outputs/index.js` | Implicit params |
| 20 | setTimeout in Loop | `outputs/index.js` | var vs let |
| 21 | Infinite Curry | `interview-questions/tekion.js` | Currying |

### Concepts

| # | Topic | File | Subtopics |
|---|-------|------|-----------|
| 37 | `this` keyword | `this/index.js` | 8+ scenarios |
| 38 | Promises | `promises/index.js` | APIs, chaining, async/await |
| 39 | DOM | `dom/index.js` | Manipulation, APIs |

### System Design

| # | Question | File | Difficulty |
|---|----------|------|------------|
| 36 | State Normalization | `system-design/normalization/index.js` | ⭐⭐ |

---

## By Difficulty

### ⭐ Easy (Beginners)

| Question | File | Category |
|----------|------|----------|
| Singleton | `patterns/singleton.js` | Pattern |
| Debounce/Throttle | `debounce-throttle/index.js` | Utility |
| Custom Cookie | `utilities/customCookie.js` | Utility |
| Mutation Observer | `utilities/mutationObserver.js` | Utility |
| Array.map | `polyfills/index.js` | Polyfill |
| Array.reduce | `polyfills/index.js` | Polyfill |
| Array.forEach | `polyfills/index.js` | Polyfill |
| DOM Manipulation | `dom/index.js` | Concept |

### ⭐⭐ Medium (Common Interview)

| Question | File | Category |
|----------|------|----------|
| Async Parallel/Series | `async-patterns/asyncSequence.js` | Async |
| MapLimit | `async-patterns/mapLimit.js` | Async |
| Circuit Breaker | `patterns/circuitBreaker.js` | Pattern |
| Pub-Sub | `patterns/pub-sub.js` | Pattern |
| Proxy | `patterns/proxy.js` | Pattern |
| Custom setTimeout | `utilities/customSetTimeout.js` | Utility |
| Pipe/Compose | `utilities/pipe.js` | Utility |
| Promise Polyfill | `polyfills/index.js` | Polyfill |
| Promise.all | `polyfills/index.js` | Polyfill |
| call/bind/apply | `polyfills/index.js` | Polyfill |
| Array.flat | `polyfills/index.js` | Polyfill |
| Object.flatten | `polyfills/index.js` | Polyfill |
| Rate Limiter | `interview-questions/rateLimiter.js` | LLD |
| Middleware | `interview-questions/middleware-thoughtspot.js` | LLD |
| State Normalization | `system-design/normalization/index.js` | System Design |

### ⭐⭐⭐ Hard (Senior Level)

| Question | File | Category |
|----------|------|----------|
| Promise Scheduler | `async-patterns/PromiseSchedulor.js` | Async |
| Fetch with Limit | `async-patterns/FetchWithLimit.js` | Async |
| Resource Pool | `patterns/resourcePool.js` | Pattern |
| Currency Converter | `utilities/currencyConverter.js` | Utility |
| File System | `lld/fileSystem.js` | LLD |
| Order Management | `lld/orderManagement.js` | LLD |

---

## By Concept

### Promises & Async

| Question | Covers |
|----------|--------|
| Promise Polyfill | States, then, catch |
| Promise.all | Parallel execution |
| Promise Scheduler | Orchestration, pause/resume |
| Async Parallel/Series | Execution patterns |
| MapLimit | Concurrency control |
| Fetch with Limit | Rate limiting |
| Promise Chain Output | Chaining, error handling |

**Files:** `polyfills/index.js`, `promises/`, `async-patterns/`, `outputs/index.js`

---

### Closures & Scope

| Question | Covers |
|----------|--------|
| Closure Output | Lexical scope |
| setTimeout Loop | var vs let |
| Custom setTimeout | Closure state |
| Debounce/Throttle | Closure variables |
| Singleton | IIFE closure |
| Curry | Nested closures |

**Files:** `outputs/index.js`, `utilities/`, `debounce-throttle/`, `patterns/singleton.js`

---

### `this` Keyword

| Scenario | Covered |
|----------|---------|
| Global scope | ✅ |
| Function (strict/non-strict) | ✅ |
| Object method | ✅ |
| Arrow function | ✅ |
| Arrow in object | ✅ |
| setTimeout callback | ✅ |
| Nested functions | ✅ |
| call/apply/bind | ✅ |

**File:** `this/index.js`

---

### Event Loop

| Topic | File |
|-------|------|
| Call stack execution | `outputs/index.js` |
| Microtask queue | `outputs/index.js` |
| Macrotask queue | `outputs/index.js` |
| setTimeout vs Promise | `outputs/index.js` |
| Execution order | `outputs/index.js` |

---

### Design Patterns

| Pattern | Use Case | File |
|---------|----------|------|
| Singleton | Single instance | `patterns/singleton.js` |
| Observer | Event system | `patterns/pub-sub.js` |
| Circuit Breaker | Fault tolerance | `patterns/circuitBreaker.js` |
| Proxy | Interception | `patterns/proxy.js` |
| Factory | Resource creation | `patterns/resourcePool.js` |

---

### Data Structures

| Structure | Implementation | File |
|-----------|----------------|------|
| Tree | File System | `lld/fileSystem.js` |
| Graph | Currency Converter | `utilities/currencyConverter.js` |
| Queue | Rate Limiter | `interview-questions/rateLimiter.js` |
| Queue | Middleware | `interview-questions/middleware-thoughtspot.js` |
| Queue | Promise Scheduler | `async-patterns/PromiseSchedulor.js` |

---

### Algorithms

| Algorithm | Implementation | File |
|-----------|----------------|------|
| BFS/DFS | Currency conversion | `utilities/currencyConverter.js` |
| Tree traversal | File system navigation | `lld/fileSystem.js` |
| Sliding window | Rate limiter | `interview-questions/rateLimiter.js` |

---

## By Company

### Tekion

**File:** `interview-questions/tekion.js`

Topics:
- Async/await execution order
- String subsequences
- Infinite curry
- Curry implementation
- Promise chain output
- Closure examples

---

### Thoughtspot

**File:** `interview-questions/middleware-thoughtspot.js`

Topics:
- Middleware pattern
- Queue management
- Async callbacks

---

## Common Interview Combos

### For Frontend Roles (Junior)
1. ✅ Debounce/Throttle
2. ✅ Promise basics
3. ✅ Array polyfills (map, filter)
4. ✅ Event loop output
5. ✅ `this` keyword basics
6. ✅ Closures

### For Frontend Roles (Mid)
1. ✅ Custom Promise implementation
2. ✅ Promise.all
3. ✅ Debounce/Throttle
4. ✅ call/bind/apply
5. ✅ Pub-Sub pattern
6. ✅ Event loop (detailed)
7. ✅ Curry/Compose

### For Frontend Roles (Senior)
1. ✅ Promise Scheduler
2. ✅ Circuit Breaker
3. ✅ LLD (File System or Order Management)
4. ✅ Rate Limiting/Throttling at scale
5. ✅ Resource Pool
6. ✅ System Design (normalization)

---

## Practice Schedule

### Week 1: Fundamentals
- Day 1-2: Polyfills (map, reduce, forEach)
- Day 3-4: Promise basics, Promise.all
- Day 5-6: Closures, `this` keyword
- Day 7: Output-based questions

### Week 2: Intermediate
- Day 1-2: Debounce, Throttle, Curry
- Day 3-4: Custom Promise, async patterns
- Day 5-6: Design patterns (Singleton, Pub-Sub)
- Day 7: Review & practice

### Week 3: Advanced
- Day 1-2: LLD (File System, Order Management)
- Day 3-4: Advanced async (Promise Scheduler, MapLimit)
- Day 5-6: Advanced patterns (Circuit Breaker, Resource Pool)
- Day 7: Mock interview practice

### Week 4: Specialization
- Day 1-3: Focus on weak areas
- Day 4-5: Company-specific questions
- Day 6-7: System design basics

---

## Quick Tips

### Before Interview
- [ ] Review output-based questions
- [ ] Practice explaining concepts verbally
- [ ] Know time/space complexity
- [ ] Prepare questions to ask interviewer

### During Interview
- Think out loud
- Ask clarifying questions
- Consider edge cases
- Start with brute force, then optimize
- Write clean, readable code
- Test your solution

### After Interview
- Note what went well
- Note what to improve
- Practice weak areas

---

**Pro Tip:** Solve each problem at least 3 times over different days for better retention!

