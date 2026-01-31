// Detailed Step-by-Step Practical Questions
// Intermediate Level - Detailed

// Question 1: Calculator with Method Chaining
// Goal: Create a calculator object with chainable methods
// Step-by-step requirements:

// Create an object called calculator with a property value set to 0
// Add an add(num) method that adds to the current value and returns this
// Add a subtract(num) method that subtracts from the current value and returns this
// Add a multiply(num) method that multiplies the current value and returns this
// Add a divide(num) method that divides the current value (handle division by zero with try-catch) and returns this
// Add a getResult() method that returns the final value
// Add a reset() method that sets value back to 0

// Expected usage:
// javascriptcalculator.add(10).subtract(3).multiply(2).divide(2).getResult(); // Should return 7
// calculator.reset().add(5).multiply(3).getResult(); // Should return 15
// Challenges to handle:

// Division by zero should throw an error but not break the chain
// Ensure this refers to the calculator object in all methods
// Methods should be chainable


// Question 2: Timer with Start/Stop/Reset
// Goal: Build a timer object that counts seconds
// Step-by-step requirements:

// Create a timer object with properties:

// seconds: starts at 0
// intervalId: stores the interval reference (initially null)
// isRunning: boolean flag (initially false)


// Create a start() method that:

// Checks if timer is already running (if yes, do nothing)
// Uses setInterval to increment seconds every 1000ms
// Stores the interval ID in intervalId
// Sets isRunning to true
// Logs the current seconds to console


// Create a stop() method that:

// Checks if timer is running
// Uses clearInterval to stop the timer
// Sets isRunning to false
// Keeps the current seconds value


// Create a reset() method that:

// Stops the timer if running
// Sets seconds back to 0
// Clears intervalId


// Create a getTime() method that:

// Returns the current seconds value



// Expected usage:
// javascripttimer.start(); // Starts counting: 1, 2, 3...
// // After 5 seconds
// timer.stop(); // Stops at 5
// timer.getTime(); // Returns 5
// timer.start(); // Resumes: 6, 7, 8...
// timer.reset(); // Back to 0
// Challenges to handle:

// Prevent multiple intervals from running simultaneously
// Handle multiple start() calls without creating multiple intervals
// Properly clear intervals to prevent memory leaks


// Question 3: Retry with Exponential Backoff
// Goal: Retry a failing operation with increasing delays
// Step-by-step requirements:

// Create a function retryOperation(operation, maxRetries = 3)
// The function should:

// Try to execute the operation function
// If it succeeds, return the result
// If it fails, catch the error
// Wait 1 second, then retry (2nd attempt)
// If fails again, wait 2 seconds, then retry (3rd attempt)
// If fails again, wait 4 seconds, then retry (4th attempt - last)
// If all retries fail, throw the final error


// Use setTimeout for delays between retries
// Log each attempt number and delay time
// The operation function should be able to throw errors randomly

// Example operation to test:
// javascriptfunction unreliableAPI() {
//     if (Math.random() > 0.7) {
//         return "Success!";
//     }
//     throw new Error("API failed");
// }

// retryOperation(unreliableAPI);
// ```

// **Expected console output:**
// ```
// Attempt 1 failed. Retrying in 1s...
// Attempt 2 failed. Retrying in 2s...
// Attempt 3 failed. Retrying in 4s...
// Attempt 4: Success!
// Challenges to handle:

// Use try-catch properly
// Calculate exponential delays (1s, 2s, 4s, 8s...)
// Use async/await or Promises with setTimeout
// Handle the case when all retries are exhausted


// Question 4: Debounced Search Function
// Goal: Create a search that waits for user to stop typing
// Step-by-step requirements:

// Create a debouncedSearch function that takes:

// searchTerm: the text to search
// delay: milliseconds to wait (default 500ms)


// The function should:

// Cancel any previous pending search
// Wait for the specified delay
// Only execute the actual search if no new input comes within the delay
// Log "Searching for: [searchTerm]" when search executes


// Create a timerId variable outside the function to track the timeout
// Simulate rapid typing by calling the function multiple times quickly

// Expected usage:
// javascriptdebouncedSearch("a");     // Timer starts
// debouncedSearch("ap");    // Previous timer cancelled, new timer starts
// debouncedSearch("app");   // Previous timer cancelled, new timer starts
// debouncedSearch("appl");  // Previous timer cancelled, new timer starts
// debouncedSearch("apple"); // Previous timer cancelled, new timer starts
// // Wait 500ms... then logs: "Searching for: apple"
// Challenges to handle:

// Clear previous timeouts before setting new ones
// Use closure to maintain timerId across calls
// Ensure only the last call triggers the search


// Question 5: Stopwatch with Lap Times
// Goal: Build a stopwatch that records lap times
// Step-by-step requirements:

// Create a stopwatch object with:

// startTime: null initially
// elapsedTime: 0 (milliseconds)
// intervalId: null
// laps: empty array
// isRunning: false


// Create a start() method that:

// Records the current timestamp using Date.now()
// Starts an interval that updates every 10ms
// Calculates and displays elapsed time in format: MM:SS:MS


// Create a stop() method that:

// Clears the interval
// Saves the final elapsed time
// Sets isRunning to false


// Create a lap() method that:

// Records current elapsed time
// Pushes it to the laps array
// Continues running
// Returns the lap time


// Create a reset() method that:

// Stops the stopwatch
// Clears all lap times
// Resets elapsed time to 0


// Create a displayTime() method that:

// Formats milliseconds into MM:SS:MS
// Returns formatted string



// Expected usage:
// javascriptstopwatch.start();
// // After 5 seconds
// stopwatch.lap(); // Records: 00:05:000
// // After 3 more seconds
// stopwatch.lap(); // Records: 00:08:000
// stopwatch.stop();
// console.log(stopwatch.laps); // ["00:05:000", "00:08:000"]
// Challenges to handle:

// Calculate time differences accurately
// Format time properly (pad zeros)
// Handle lap recording while timer is running
// Prevent memory leaks from intervals


// Question 6: Input Validator with Custom Errors
// Goal: Validate user input and throw specific errors
// Step-by-step requirements:

// Create custom error classes:

// AgeError extends Error
// EmailError extends Error
// PasswordError extends Error


// Create a validateUser(userData) function that checks:

// Age: Must be between 13 and 120

// If less than 13: throw AgeError("Too young")
// If greater than 120: throw AgeError("Invalid age")


// Email: Must contain @ and .

// If invalid: throw EmailError("Invalid email format")


// Password: Must be at least 8 characters

// If too short: throw PasswordError("Password too short")




// Create a registerUser(userData) function that:

// Calls validateUser inside try-catch
// Catches specific error types
// Logs appropriate user-friendly messages
// Returns true if valid, false if invalid



// Expected usage:
// javascriptregisterUser({ age: 10, email: "test@mail.com", password: "pass123456" });
// // Output: "Registration failed: Too young"

// registerUser({ age: 25, email: "invalid-email", password: "pass123456" });
// // Output: "Registration failed: Invalid email format"

// registerUser({ age: 25, email: "test@mail.com", password: "123" });
// // Output: "Registration failed: Password too short"

// registerUser({ age: 25, email: "test@mail.com", password: "pass123456" });
// // Output: "Registration successful!"
// Challenges to handle:

// Create proper custom error classes
// Use instanceof to catch specific errors
// Provide helpful error messages
// Handle multiple validation rules


// Question 7: Toast Notification System
// Goal: Create auto-dismissing notifications
// Step-by-step requirements:

// Create a toastManager object with:

// toasts: empty array to store active toasts
// nextId: counter starting at 1


// Create a show(message, duration = 3000) method that:

// Creates a toast object: { id, message, timestamp }
// Adds it to the toasts array
// Logs: "Toast [id]: [message]"
// Uses setTimeout to auto-remove after duration
// Returns the toast ID


// Create a remove(id) method that:

// Finds toast by ID in the array
// Removes it from the array
// Logs: "Toast [id] dismissed"


// Create a removeAll() method that:

// Clears all active toasts
// Cancels all pending timeouts



// Expected usage:
// javascripttoastManager.show("File uploaded!", 2000);
// // Logs: "Toast 1: File uploaded!"
// // After 2 seconds: "Toast 1 dismissed"

// toastManager.show("Error occurred", 3000);
// toastManager.show("Warning: Low storage", 3000);
// // Both appear, both auto-dismiss after 3s

// toastManager.removeAll(); // Immediately clears all
// Challenges to handle:

// Track timeout IDs to clear them later
// Handle multiple simultaneous toasts
// Prevent memory leaks from unclosed timeouts
// Manage toast IDs properly


// Question 8: Rate Limiter Function
// Goal: Limit function calls to 3 per 10 seconds
// Step-by-step requirements:

// Create a rateLimiter(func, maxCalls = 3, timeWindow = 10000) that:

// Tracks timestamps of recent calls in an array
// Returns a new function that wraps the original


// The wrapped function should:

// Check timestamps of calls in last 10 seconds
// Remove timestamps older than 10 seconds
// Count remaining valid timestamps
// If count < 3: Execute function and add timestamp
// If count >= 3: Log "Rate limit exceeded. Try again later."


// Keep a callHistory array with timestamps

// Expected usage:
// javascriptfunction sendMessage(msg) {
//     console.log("Message sent:", msg);
// }

// const limitedSend = rateLimiter(sendMessage, 3, 10000);

// limitedSend("Hello");  // ✅ Executes (1/3)
// limitedSend("Hi");     // ✅ Executes (2/3)
// limitedSend("Hey");    // ✅ Executes (3/3)
// limitedSend("Yo");     // ❌ Rate limit exceeded
// // Wait 10 seconds...
// limitedSend("Back!");  // ✅ Executes (rate limit reset)
// Challenges to handle:

// Filter old timestamps efficiently
// Use Date.now() for accurate timing
// Use closures to maintain call history
// Handle edge cases (exactly at time boundaries)


// Question 9: Polling Function with Timeout
// Goal: Check a condition repeatedly until it's met or timeout
// Step-by-step requirements:

// Create a poll(checkFunction, interval = 2000, timeout = 30000) function
// The function should:

// Call checkFunction every 2 seconds using setInterval
// If checkFunction returns true: Stop polling, log "Condition met!"
// Set a setTimeout for 30 seconds (timeout)
// If timeout reaches: Stop polling, log "Timeout: Condition not met"
// Return a Promise that resolves when condition met, rejects on timeout


// Create cleanup function that clears both interval and timeout

// Expected usage:
// javascriptlet count = 0;
// function checkIfReady() {
//     count++;
//     console.log(`Check #${count}`);
//     return count >= 5; // True after 5 checks
// }

// poll(checkIfReady, 2000, 15000)
//     .then(() => console.log("Success!"))
//     .catch(() => console.log("Failed!"));

// // Output:
// // Check #1 (at 0s)
// // Check #2 (at 2s)
// // Check #3 (at 4s)
// // Check #4 (at 6s)
// // Check #5 (at 8s)
// // Condition met! Success!
// Challenges to handle:

// Use both setInterval and setTimeout
// Clear both timers properly
// Return a Promise for async handling
// Handle cleanup on success OR timeout


// Question 10: Countdown Timer with Pause/Resume
// Goal: Build a countdown timer (MM:SS format)
// Step-by-step requirements:

// Create a countdown object with:

// totalSeconds: initial countdown value
// remainingSeconds: current countdown value
// intervalId: null
// isPaused: false


// Create a start(seconds) method that:

// Sets totalSeconds and remainingSeconds
// Starts an interval that decrements every 1 second
// Displays time in MM:SS format
// When reaches 0: stops and calls a callback


// Create a pause() method that:

// Clears the interval
// Keeps remainingSeconds unchanged
// Sets isPaused to true


// Create a resume() method that:

// Restarts interval from remainingSeconds
// Sets isPaused to false


// Create a reset() method that:

// Stops timer
// Resets to totalSeconds


// Create a formatTime(seconds) helper that:

// Converts seconds to MM:SS format
// Example: 125 → "02:05"



// Expected usage:
// javascriptcountdown.start(10); // Starts at 00:10
// // Displays: 00:10, 00:09, 00:08...
// countdown.pause();   // Pauses at 00:06
// countdown.resume();  // Continues: 00:05, 00:04...
// // When reaches 00:00: "Countdown finished!"
// Challenges to handle:

// Format time with leading zeros
// Handle pause/resume state properly
// Clear intervals correctly
// Trigger callback at zero


// Advanced Level - Detailed

// Question 16: Promise-based Retry with Error Filtering
// Goal: Advanced retry mechanism with error filtering
// Step-by-step requirements:

// Create retryWithFilter(operation, options) where options include:

// maxAttempts: number (default 3)
// delay: milliseconds (default 1000)
// backoff: 'linear' or 'exponential' (default 'exponential')
// retryableErrors: array of error types to retry on


// The function should:

// Attempt the operation
// If succeeds: resolve immediately
// If fails: check if error type is in retryableErrors
// If error is retryable: wait and retry
// If error is NOT retryable: reject immediately
// Calculate delay based on backoff strategy
// Log each attempt with error details


// Return a Promise that resolves with result or rejects after all attempts

// Expected usage:
// javascriptclass NetworkError extends Error {}
// class ValidationError extends Error {}

// async function unreliableAPI() {
//     const random = Math.random();
//     if (random < 0.3) throw new NetworkError("Connection failed");
//     if (random < 0.5) throw new ValidationError("Invalid data");
//     return "Success!";
// }

// retryWithFilter(unreliableAPI, {
//     maxAttempts: 5,
//     delay: 1000,
//     backoff: 'exponential',
//     retryableErrors: [NetworkError] // Only retry NetworkError
// })
// .then(result => console.log(result))
// .catch(error => console.log("Failed:", error.message));
// Challenges to handle:

// Check error type using instanceof
// Calculate exponential vs linear backoff
// Use async/await with setTimeout
// Properly propagate non-retryable errors
// Log detailed retry information


// Question 20: Connection Pool Manager
// Goal: Manage concurrent requests with limits
// Step-by-step requirements:

// Create ConnectionPool class with:

// maxConnections: 5
// activeConnections: 0
// queue: array of pending requests
// timeout: 10000ms per request


// Create acquire() method that:

// Returns a Promise
// If active connections < max: resolve immediately with connection
// If at max: add to queue
// Reject after timeout if still waiting


// Create release() method that:

// Decrements active connections
// Processes next item in queue if any


// Create execute(task) method that:

// Acquires connection
// Executes task
// Handles task errors
// Always releases connection (use finally)
// Implements request timeout



// Expected usage:
// javascriptconst pool = new ConnectionPool(3);

// async function fetchData(id) {
//     return pool.execute(async () => {
//         console.log(`Fetching data ${id}...`);
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         return `Data ${id}`;
//     });
// }

// // Fire 10 requests simultaneously
// Promise.all([
//     fetchData(1), fetchData(2), fetchData(3),
//     fetchData(4), fetchData(5), fetchData(6),
//     fetchData(7), fetchData(8), fetchData(9), fetchData(10)
// ]).then(results => console.log(results));

// // Only 3 execute at a time, others wait in queue
// Challenges to handle:

// Queue management (FIFO)
// Connection counting
// Timeout handling per request
// Error handling without losing connections
// Always release connections (even on error)


// Question 25: Form Auto-Save with Conflict Resolution
// Goal: Auto-save form data every 30 seconds
// Step-by-step requirements:

// Create FormAutoSaver class with:

// formData: object storing all form fields
// isDirty: boolean (has unsaved changes)
// isSaving: boolean (save in progress)
// lastSaved: timestamp
// autoSaveInterval: 30000ms


// Create startAutoSave() method that:

// Uses setInterval to save every 30s
// Only saves if isDirty is true
// Skips if already saving
// Updates save status in UI


// Create save() method that:

// Sets isSaving to true
// Simulates API call (use setTimeout for 2s delay)
// Can randomly fail (simulate network issues)
// On success: clear isDirty, update lastSaved
// On failure: retry once after 5 seconds
// Always set isSaving to false in finally


// Create updateField(fieldName, value) method that:

// Updates formData[fieldName]
// Sets isDirty to true


// Create getStatus() method that returns:

// "Saved" if not dirty
// "Saving..." if currently saving
// "Unsaved changes" if dirty
// "Last saved: [time]" with formatted timestamp



// Expected usage:
// javascriptconst formSaver = new FormAutoSaver();
// formSaver.startAutoSave();

// formSaver.updateField('username', 'john_doe');
// formSaver.updateField('email', 'john@example.com');
// // Status: "Unsaved changes"

// // After 30 seconds: auto-save triggers
// // Status: "Saving..."
// // After 2 seconds: "Saved - Last saved: 2:30 PM"

// formSaver.updateField('email', 'john.doe@example.com');
// // Status: "Unsaved changes"
// // Will auto-save again in 30s
// Challenges to handle:

// Prevent concurrent saves
// Track dirty state accurately
// Format timestamps nicely
// Handle save failures with retry
// Clean up intervals on destroy
// Simulate network delays and failures


// Question 30: Circuit Breaker Pattern
// Goal: Stop calling failing APIs automatically
// Step-by-step requirements:

// Create CircuitBreaker class with states:

// CLOSED: Normal operation, requests go through
// OPEN: Too many failures, block all requests
// HALF_OPEN: Testing if service recovered


// Initialize with:

// failureThreshold: 5 consecutive failures
// timeout: 30000ms (time to wait before retry)
// failureCount: 0
// state: 'CLOSED'
// nextAttempt: null (timestamp)


// Create execute(operation) method that:

// If state is OPEN:

// Check if timeout passed
// If not: reject immediately with "Circuit is OPEN"
// If yes: change to HALF_OPEN, allow one test request


// If state is CLOSED or HALF_OPEN:

// Try to execute operation
// On success: reset failure count, set state to CLOSED
// On failure: increment failure count


// If failures >= threshold: open circuit


// Create reset() method to manually close circuit
// Log state changes: "Circuit OPENED", "Circuit CLOSED", "Circuit HALF_OPEN"

// Expected usage:
// javascriptconst breaker = new CircuitBreaker(3, 10000);

// async function unreliableAPI() {
//     if (Math.random() < 0.8) throw new Error("API Error");
//     return "Success";
// }

// // Attempt 1-3: Fail, circuit still CLOSED
// breaker.execute(unreliableAPI).catch(e => console.log(e));
// breaker.execute(unreliableAPI).catch(e => console.log(e));
// breaker.execute(unreliableAPI).catch(e => console.log(e));

// // Attempt 4: Fails, circuit OPENS
// breaker.execute(unreliableAPI).catch(e => console.log(e));
// // Output: "Circuit OPENED - too many failures"

// // Attempt 5: Immediately rejected
// breaker.execute(unreliableAPI).catch(e => console.log(e));
// // Output: "Circuit is OPEN. Try again later."

// // Wait 10 seconds...
// // Circuit goes to HALF_OPEN
// // Next call is a test - if succeeds, circuit CLOSES
// Challenges to handle:

// State machine logic (CLOSED → OPEN → HALF_OPEN → CLOSED)
// Timestamp comparison for timeout
// Failure counting and reset
// Immediate rejection when OPEN
// Single test request in HALF_OPEN
// Clear logging of state transitions


// Would you like me to continue with more detailed breakdowns for questions 11-15 and 17-29?