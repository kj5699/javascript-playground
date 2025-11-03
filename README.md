# JavaScript Interview Preparation Playground

A comprehensive collection of JavaScript interview questions and their implementations, organized by categories and difficulty levels.

## 📚 Overview

This repository contains 40+ commonly asked JavaScript interview questions with working implementations. Perfect for preparing for frontend developer positions at companies like Google, Amazon, Microsoft, and startups.

## 🎯 What's Inside

### 📖 **[QUESTIONNAIRE.md](./QUESTIONNAIRE.md)** - Complete Question Bank

A comprehensive guide with:
- Detailed problem statements
- Key concepts for each question
- Difficulty ratings
- Category-wise organization
- Quick reference guide

### 📁 Repository Structure

```
javascript-playground/
├── async-patterns/          # Async programming challenges
│   ├── asyncSequence.js     # Parallel vs Series execution
│   ├── FetchWithLimit.js    # Rate-limited API calls
│   ├── mapLimit.js          # Concurrent async operations
│   └── PromiseSchedulor.js  # Promise orchestration with pause/resume
│
├── patterns/                # Design Patterns
│   ├── circuitBreaker.js    # Circuit Breaker pattern
│   ├── singleton.js         # Singleton implementation
│   ├── pub-sub.js          # Event Emitter/Observer
│   ├── proxy.js            # Proxy pattern
│   └── resourcePool.js     # Resource pooling
│
├── utilities/              # Utility implementations
│   ├── currencyConverter.js # Graph-based currency conversion
│   ├── customCookie.js      # Custom cookie handler
│   ├── customSetTimeout.js  # setTimeout implementation
│   ├── mutationObserver.js  # DOM observation
│   └── pipe.js             # Function composition
│
├── polyfills/              # JavaScript polyfills
│   └── index.js            # Promise, map, reduce, call, bind, etc.
│
├── lld/                    # Low-Level Design
│   ├── fileSystem.js       # In-memory file system
│   └── orderManagement.js  # E-commerce order system
│
├── interview-questions/    # Company-specific questions
│   ├── rateLimiter.js      # API rate limiting
│   ├── middleware-thoughtspot.js # Middleware pattern
│   ├── tekion.js           # Tekion interview problems
│   └── tekion2.js
│
├── debounce-throttle/      # Performance optimization
│   └── index.js            # Debounce & Throttle
│
├── promises/               # Promise deep dive
│   ├── CustomPromise.js    # Full Promise implementation
│   └── index.js            # Promise concepts & examples
│
├── outputs/                # Output-based questions
│   └── index.js            # Event loop, closures, etc.
│
├── this/                   # 'this' keyword concepts
│   └── index.js            # All 'this' binding scenarios
│
├── dom/                    # DOM manipulation
│   └── index.js            # DOM APIs
│
├── system-design/          # System design concepts
│   └── normalization/      # State normalization
│
└── typescript/             # TypeScript examples
    └── src/
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- Modern web browser (for DOM examples)

### Running Examples

1. **Node.js examples:**
```bash
node async-patterns/PromiseSchedulor.js
node patterns/circuitBreaker.js
```

2. **Browser examples:**
```bash
# Open HTML files in browser
open debounce-throttle/index.html
open promises/index.html
```

## 📊 Question Categories

### 🔄 Async Patterns (5 questions)
- Promise scheduling with pause/resume
- Rate-limited fetch
- Concurrent operation limiting
- Series vs Parallel execution

### 🎨 Design Patterns (5 questions)
- Circuit Breaker
- Singleton
- Pub-Sub (Event Emitter)
- Proxy
- Resource Pool

### 🔧 Polyfills (10+ questions)
- Promise, Promise.all, Promise.allSettled
- call, bind, apply
- map, reduce, forEach, flat
- Object.flatten

### 🏗️ Low-Level Design (4 questions)
- File System
- Order Management System
- Rate Limiter
- Middleware System

### 💻 Output-Based (6+ questions)
- Event loop & execution order
- Closures & scope
- Promise chains
- Array.map with parseInt
- setTimeout in loops

### 📘 Concepts (3 topics)
- `this` keyword (all scenarios)
- Promises (deep dive)
- DOM manipulation

## 🎓 Difficulty Levels

### ⭐ Easy (Good for Beginners)
- Debounce/Throttle
- Array polyfills
- DOM manipulation
- Basic Promise usage
- Singleton pattern

### ⭐⭐ Medium (Common Interview Questions)
- Custom Promise implementation
- Circuit Breaker
- Rate Limiter
- mapLimit
- Curry/Compose
- Pub-Sub pattern

### ⭐⭐⭐ Hard (Senior Level)
- Promise Scheduler with pause/resume
- Resource Pool
- File System Design
- Currency Converter with graph traversal
- Middleware implementation

## 📝 How to Use This Repository

### For Interview Prep:
1. Read [QUESTIONNAIRE.md](./QUESTIONNAIRE.md) for problem statements
2. Try solving without looking at code
3. Compare your solution with implementation
4. Understand the key concepts

### For Quick Revision:
1. Use QUESTIONNAIRE.md as a checklist
2. Review output-based questions
3. Practice explaining concepts

### For Deep Learning:
1. Read and understand each implementation
2. Run the code and see outputs
3. Modify code to test edge cases
4. Add your own test cases

## 🎯 Interview Tips

### What Interviewers Look For:
- **Problem-solving approach**: Think out loud
- **Code quality**: Clean, readable code
- **Edge cases**: Consider boundary conditions
- **Time/Space complexity**: Analyze your solution
- **Communication**: Explain your thought process

### Common Topics:
- ✅ Promises & Async/Await
- ✅ Closures & Scope
- ✅ Event Loop & Execution Context
- ✅ Array/Object methods
- ✅ `this` keyword
- ✅ Design Patterns
- ✅ Performance Optimization
- ✅ System Design basics

## 📚 Key Concepts Covered

### JavaScript Fundamentals
- Execution Context
- Hoisting
- Closures
- Prototypes
- `this` binding

### Async JavaScript
- Promises
- Async/Await
- Event Loop
- Microtasks vs Macrotasks
- Concurrent execution

### Design Patterns
- Singleton
- Observer (Pub-Sub)
- Circuit Breaker
- Proxy
- Factory

### Data Structures & Algorithms
- Graphs (Currency Converter)
- Trees (File System)
- Queues (Rate Limiter, Middleware)
- BFS/DFS

### Performance
- Debouncing
- Throttling
- Memoization
- Resource Pooling

## 🏢 Company-Specific Questions

This repository includes actual questions asked at:
- Tekion
- Thoughtspot
- And other top companies

## 🔗 Related Topics Not Covered

This is a JavaScript-focused repository. For complete interview prep, also study:
- React/Vue/Angular (if required)
- TypeScript
- Testing (Jest, Testing Library)
- Build tools (Webpack, Vite)
- Git & Version Control
- System Design (for senior roles)

## 📈 Progress Tracking

Use this checklist to track your progress:

**Async Patterns:**
- [ ] asyncSequence
- [ ] FetchWithLimit
- [ ] mapLimit
- [ ] PromiseSchedulor

**Design Patterns:**
- [ ] Circuit Breaker
- [ ] Singleton
- [ ] Pub-Sub
- [ ] Proxy
- [ ] Resource Pool

**Polyfills:**
- [ ] Promise
- [ ] Promise.all/allSettled
- [ ] call/bind/apply
- [ ] map/reduce/forEach
- [ ] Array.flat
- [ ] Object.flatten

**LLD:**
- [ ] File System
- [ ] Order Management
- [ ] Rate Limiter
- [ ] Middleware

**Concepts:**
- [ ] `this` keyword
- [ ] Promises
- [ ] Event Loop
- [ ] Closures

## 🤝 Contributing

Feel free to:
- Add more questions
- Improve implementations
- Fix bugs
- Add test cases
- Improve documentation

## 📄 License

This repository is for educational purposes. Feel free to use for interview preparation.

---

## 🌟 Star this repo if it helped you!

Good luck with your interviews! 🚀

**Pro Tip:** Don't just memorize solutions. Understand the concepts and practice explaining them in simple terms.
