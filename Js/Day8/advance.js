// Intermediate & Advanced Practical Questions (30 Total)
// Intermediate Level (15 Questions)
//* 1. Create a calculator object with methods (add, subtract, multiply, divide). Each method should return this for method chaining and maintain a running total.

//* one way
let result = 0;
function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      console.log("Wrong operator plz select from +,-,*,/");
  }
  return result;
}
let ans = calculator(5, 10, "/");
console.log(ans);

//* second way

{
  const calculator = {
    value: 0,
    sum(num) {
	  this.value += num;
      return this
	
    },
    sub(num) {
       this.value -= num;
	  return this
    },
    multiply(num) {
        this.value += num;
	   return this
    },
    devide(num) {
       this.value /= num;
	  return this
    },
    getResult() {
    console.log(this.value)
    },
    reset() {
       this.value = 0;
	  return this
    },
  };
 calculator.sum(10).sub(10).getResult().reset()
  
 
  
}

// function sum(a, b) {
//   return a + b;
// }
// function Sub(a, b) {
//   return a - b;
// }

// 2. Build a timer object with start(), stop(), and reset() methods. The timer should display elapsed seconds and handle multiple start/stop calls correctly.
// 3. Write a function that retries a failed operation 3 times with exponential backoff (1s, 2s, 4s) using setTimeout. Use try-catch for error handling.
// 4. Create a debounced search function that only executes 500ms after the user stops typing. Clear previous timers properly.
// 5. Build a stopwatch with lap functionality. Store lap times in an array and display them. Use setInterval and proper cleanup.
// 6. Write a function that validates user input (age, email, password) and throws custom errors with specific messages for each validation failure.
// 7. Create a "toast notification" system that auto-dismisses after 3 seconds. Multiple toasts should queue and dismiss in order.
// 8. Build a rate limiter function that allows only 3 function calls per 10 seconds. Additional calls should be queued or rejected.
// 9. Implement a polling function that checks an API every 2 seconds until a condition is met or timeout occurs (30 seconds). Handle cleanup properly.
// 10. Create a countdown timer (MM:SS format) that starts from a given number and triggers a callback when it reaches zero. Allow pause/resume functionality.
// 11. Write a function that chains multiple async operations with error handling. If any operation fails, rollback previous operations.
// 12. Build a "typing effect" animator that types out text character by character with configurable speed. Allow stopping mid-animation.
// 13. Create a carousel auto-play feature that cycles through images every 3 seconds. Pause on hover, resume on mouse leave.
// 14. Implement a "idle detector" that triggers a callback if no user activity (mouse/keyboard) for 5 minutes. Reset timer on any activity.
// 15. Build a notification badge counter that increments every 5 seconds (simulating new messages). Allow user to clear and reset the counter.

// Advanced Level (15 Questions)
// 16. Create a Promise-based retry mechanism with configurable attempts, delays, and error filtering (retry only on specific errors).
// 17. Build a task scheduler that executes functions at specific times/intervals with priority queuing and cancellation support.
// 18. Implement a traffic light system (Red 5s → Yellow 2s → Green 5s) using Promises or async/await. Allow manual override and emergency stop.
// 19. Create a connection pool manager that handles concurrent requests with max connections (5), timeout (10s), and retry logic.
// 20. Build an "undo/redo" system for a drawing app. Track actions with timestamps and allow undo with a 5-second timeout before permanent save.
// 21. Implement a real-time stock price updater that fetches prices every 3 seconds, calculates moving averages, and handles API failures gracefully.
// 22. Create a game loop using requestAnimationFrame with delta time calculations. Handle pause/resume and frame rate limiting.
// 23. Build a distributed rate limiter that tracks API calls across multiple tabs/windows using localStorage events and timestamps.
// 24. Implement a "progressive image loader" that loads low-res first, then high-res with timeout fallback and error recovery.
// 25. Create a "form auto-save" feature that saves data every 30 seconds, handles concurrent edits, prevents data loss, and shows save status.
// 26. Build a WebSocket reconnection manager with exponential backoff, maximum retry limit, and graceful degradation to polling.
// 27. Implement a "batch processor" that collects function calls over 2 seconds and executes them together. Handle errors for individual items.
// 28. Create a memory leak detector that monitors setInterval/setTimeout calls and alerts when timers aren't cleared after component unmount.
// 29. Build a "priority queue executor" that runs high-priority tasks immediately and batches low-priority tasks every 5 seconds.
// 30. Implement a "circuit breaker" pattern that stops calling a failing API after 5 consecutive errors, waits 30s, then allows one retry attempt.
