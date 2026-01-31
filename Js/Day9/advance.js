// Level 1: Single Method Challenges
// Q1: Grade Distribution Counter
// You have an array of student scores: [45, 78, 89, 34, 92, 56, 67, 88, 91, 43, 72]
// Count how many students fall into each grade category:

// A grade: 90-100
// B grade: 75-89
// C grade: 50-74
// F grade: below 50

// What it tests: Using forEach with conditional logic and external counters. You need to track multiple conditions simultaneously.

let studentScore = [45, 78, 89, 34, 92, 56, 67, 88, 91, 43, 72];
let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let fail = 0;
studentScore.forEach((elem) => {
  if (elem >= 90 && elem <= 100) {
    gradeA++;
  } else if (elem >= 75 && elem <= 89) {
    gradeB++;
  } else if (elem >= 50 && elem <= 74) {
    gradeC++;
  } else {
    fail++;
  }
});
console.log(`A : ${gradeA}, B : ${gradeB}, C : ${gradeC}, F : ${fail}`);

// Q2: Price Tag Generator
// You run an online store. You have base prices: [299, 599, 1299, 2499, 4999]
// Create a new array where each price shows:

// Original price + 18% GST
// Formatted as: "MRP: ₹XXX (incl. GST)"
// Rounded to nearest rupee (no decimals)

// What it tests: Using map with calculations, string formatting, and the Math.round() concept. Tests if you can chain operations within the callback.

let price = [299, 599, 1299, 2499, 4999, 100];
let newPrice = price.map((elem) => {
  let OP = Math.round((elem * 18) / 100 + elem);
  return `MRP: $${OP} (incl. GST)`;
});

console.log(newPrice);
newPrice.forEach((elem) => {
  console.log(elem);
});

// Q3: Premium Members Filter
// You have users:
// javascript[
//   {name: "Raj", age: 17, premium: true},
//   {name: "Priya", age: 24, premium: false},
//   {name: "Amit", age: 19, premium: true},
//   {name: "Sara", age: 16, premium: true},
//   {name: "Dev", age: 22, premium: true}
// ]
// Get only users who are BOTH adults (18+) AND premium members.
// What it tests: Using filter with compound conditions (AND logic). Can you check multiple properties of an object?

let javascript = [
  { name: "Raj", age: 17, premium: true },
  { name: "Priya", age: 24, premium: false },
  { name: "Amit", age: 19, premium: true },
  { name: "Sara", age: 16, premium: true },
  { name: "Dev", age: 22, premium: true },
];

let newJS = javascript.filter((elem) => {
  return elem.premium === true && elem.age >= 18;
});

console.log(newJS);

//* Q4: Discounted Products Finder
// Products array:
// javascript[
//   {name: "Laptop", price: 45000, category: "electronics", inStock: true},
//   {name: "Shirt", price: 800, category: "clothing", inStock: false},
//   {name: "Phone", price: 15000, category: "electronics", inStock: true},
//   {name: "Shoes", price: 2500, category: "clothing", inStock: true},
//   {name: "Watch", price: 3000, category: "accessories", inStock: false}
// ]
// Find all products that are:

// In stock
// Price between ₹1000 and ₹20000
// Then apply 10% discount to those prices
// Return array with product names and discounted prices only

// What it tests: Chaining filter and map. Multiple conditions in filter, then transformation in map. Object destructuring understanding.

let products = [
  { name: "Laptop", price: 45000, category: "electronics", inStock: true },
  { name: "Shirt", price: 800, category: "clothing", inStock: false },
  { name: "Phone", price: 15000, category: "electronics", inStock: true },
  { name: "Shoes", price: 2500, category: "clothing", inStock: true },
  { name: "Watch", price: 3000, category: "accessories", inStock: false },
];

let newProduct = products.filter((elem) => {
  return elem.inStock == true && elem.price > 1000 && elem.price <= 20000;
});
console.log(newProduct);
let discountedPrice = newProduct.map((elem) => {
  return elem.price - (elem.price * 10) / 100;
});
console.log(discountedPrice);

//* Q5: Validation Checker
// You have a form with these inputs: ["john@email.com", "test123", "pass", "validuser@domain.com", ""]
// Check if:

// ALL inputs have at least 5 characters (use every)
// ANY input contains the "@" symbol (use some)

// Print both results with meaningful messages.
// What it tests: Understanding the difference between every and some. String methods like includes() or length. Boolean logic interpretation.

let user = ["john@email.com", "test123", "pass", "validuser@domain.com", ""];
let isLength = user.every((elem) => {
  return elem.length >= 5;
});

let hasEmail = user.some((elem) => {
  return elem.includes("@");
});

if (isLength) {
  console.log("All inputs have length 5");
} else {
  console.log("not all has length 5");
}

if (hasEmail) {
  console.log("yes there is email present");
} else {
  console.log("email not present");
}
//* Level 3: Logic Building + Real Scenarios
//* Q6: Shopping Cart Analyzer
// Cart items:
// javascript[
//   {item: "Milk", price: 60, quantity: 2},
//   {item: "Bread", price: 40, quantity: 3},
//   {item: "Eggs", price: 80, quantity: 1},
//   {item: "Butter", price: 220, quantity: 1}
// ]
// Calculate:

// Total cart value (price × quantity for each item, then sum)
// Check if any single item's total exceeds ₹200
// Check if all items are below ₹300 total

// What it tests: Using forEach to accumulate (question 1), some for existence check (question 2), every for universal check (question 3). Understanding that you need different methods for different questions.

let product = [
  { item: "Milk", price: 60, quantity: 2 },
  { item: "Bread", price: 40, quantity: 3 },
  { item: "Eggs", price: 80, quantity: 1 },
  { item: "Butter", price: 220, quantity: 1 },
];

let sum = 0;
let totalPrice = product.map((elem) => {
  return (sum += elem.price * elem.quantity);
});
console.log(totalPrice);
console.log(sum);

let singleCheck = totalPrice.some((elem) => {
  return elem >= 200;
});
console.log(singleCheck);

let allItems = totalPrice.every((elem) => {
  return elem >= 300;
});
console.log(allItems);

//* Q7: Attendance Eligibility
// Students with attendance:
// javascript[
//   {name: "Rahul", present: 18, total: 20},
//   {name: "Priya", present: 22, total: 25},
//   {name: "Amit", present: 14, total: 20},
//   {name: "Sara", present: 19, total: 25}
// ]
// Rules:

// Students need 75% attendance to appear in exams
// Calculate attendance percentage for each student
// Filter students who are eligible
// Return only their names in uppercase

// What it tests: Chaining map (to calculate percentage), then filter (to check eligibility), then another map (to extract and transform names). Multi-step thinking.

let student = [
  { name: "Rahul", present: 18, total: 20 },
  { name: "Priya", present: 22, total: 25 },
  { name: "Amit", present: 14, total: 20 },
  { name: "Sara", present: 19, total: 25 },
];

let attendance = student.map((elem) => {
  return (elem.total * 75) / 100;
});

console.log("attendance", attendance);
// [15, 18.75, 15, 18.75]

let eligibleStudents = student.filter((elem, index) => {
  return elem.present >= attendance[index];
});

console.log("eligsable: ", eligibleStudents);

// let attendance = student.filter((elem)=>{
//   let requiredAttendance = (elem.total * 75)/100
//   return elem.present > requiredAttendance
// })

console.log("elible student", attendance);

//* Q8: Dynamic Pricing Engine
// Base prices: [500, 1500, 3000, 7500, 15000]
// Apply tiered discount:

// Products ≤ ₹1000: No discount
// Products ₹1001-5000: 10% off
// Products > ₹5000: 20% off

// Return final prices rounded to nearest ₹10 (e.g., ₹1347 becomes ₹1350)
// What it tests: Using map with nested if-else conditions. Mathematical operations with rounding logic. Can you think in ranges?

let prices = [500, 1500, 3000, 7500, 15000];
let discount = 0;
let finalPrice = prices.map((elem) => {
  if (elem <= 1000) {
    discount = 0;
  } else if (elem >= 1001 && elem < 5000) {
    discount = (elem * 10) / 100;
  } else if (elem > 5000) {
    discount = (elem * 20) / 100;
  }
  return Math.round(elem - discount);
});

console.log("final price", finalPrice);
//* Level 4: Advanced Logic Patterns
//* Q9: Data Sanitization Pipeline
// Raw user inputs: ["  john  ", "PRIYA", "amit123", "  SARA ", "dev@2024"]
// Clean the data:

// Remove extra spaces (trim)
// Convert to lowercase
// Remove any entries that contain numbers or special characters
// Capitalize first letter of remaining names

// What it tests: Method chaining (map → filter → map). String manipulation. Regular expressions or character checking. Multi-stage data transformation.

let users = ["  john  ", "PRIYA", "amit123", "  SARA ", "dev@2024"];

function checkCharacter(str) {
  const target = "1234567890@#$%^&";

  for (let char of str) {
    if (target.includes(char)) {
      return true;
    } else {
      false;
    }
  }
}

const newUser = users
  .map((elem) => {
    return elem.trim().toLowerCase();
  })
  .filter((elem) => {
    return !checkCharacter(elem);
  })
  .map((elem) => {
    // console.log(elem)

    // console.log(elem[0].toUpperCase())
    // return elem.charAt(0).toUpperCase() + elem.slice(1)
    let word = elem.replace(elem[0], elem[0].toUpperCase());

    return word;
  });
console.log(newUser);

//* Q10: Team Formation Validator
// Cricket team candidates:
// javascript[
//   {name: "Virat", age: 22, score: 850, available: true},
//   {name: "Rohit", age: 25, score: 920, available: false},
//   {name: "Dhoni", age: 28, score: 780, available: true},
//   {name: "Bumrah", age: 21, score: 650, available: true},
//   {name: "Hardik", age: 24, score: 890, available: true}
// ]
// Team selection rules:

// Need exactly 4 players
// All must be available
// All must have score ≥ 700
// Average age should be ≤ 25

// Write logic to check if you CAN form a valid team, and if yes, show the selected players.
// What it tests: Combining filter, every, some, length checks, and calculations. Multi-criteria decision making. Understanding when to use which method.

let candidates = [
  { name: "Virat", age: 50, score: 850, available: true },
  { name: "Rohit", age: 80, score: 920, available: true },
  { name: "Dhoni", age: 55, score: 780, available: true },
  { name: "Bumrah", age: 25, score: 650, available: true },
  { name: "Hardik", age: 26, score: 890, available: true },
];

let availableCandidates = candidates.filter((elem) => {
  return elem.available && elem.score >= 700;
});

if (availableCandidates.length === 4) {
  let totalAge = availableCandidates.reduce((sum, elem) => {
    return (sum += elem);
  }, 0);
  let avgAge = totalAge / availableCandidates.length;
  console.log(avgAge);
  if (avgAge <= 25) {
    console.log("Team can be formed");
  } else {
    console.log("Cannot form team : avg age is not less than or equal to 25");
  }
} else {
  console.log("Cannot form team beacuse we dont have 4 players");
}

console.log(availableCandidates);
//* Q11: Nested Data Extraction
// Orders data:
// javascript[
//   {orderId: 101, items: [299, 599, 199], delivered: true},
//   {orderId: 102, items: [1299, 2499], delivered: false},
//   {orderId: 103, items: [99, 149, 249, 349], delivered: true}
// ]
// Find:

// Total revenue from delivered orders only
// Check if any delivered order has an item above ₹500

// What it tests: Working with nested arrays. Using filter on outer array, then accessing inner arrays. Combining multiple array methods across different levels.

let OrderData = [
  { orderId: 101, items: [700, 900], delivered: true },
  { orderId: 102, items: [1299, 2499], delivered: false },
  { orderId: 103, items: [800, 855], delivered: true },
];

let total = OrderData.filter((elem) => {
  return elem.delivered == true;
}).reduce((acc, elem) => {
  return (acc += elem.items.reduce((sum, el) => {
    return (sum += el);
  }, 0));
}, 0);

console.log("total revenue", total);

let Greater = OrderData.filter((elem) => {
  return elem.delivered == true;
}).some((elem) => {
  return elem.items.some((elem) => {
    return elem > 500;
  });
});

console.log(Greater);

//* Q12: Performance Report Generator
// Monthly sales by salesperson:
// javascript[
//   {name: "Rajesh", sales: [12000, 15000, 18000, 14000]},
//   {name: "Meera", sales: [9000, 11000, 13000, 10000]},
//   {name: "Arjun", sales: [20000, 18000, 22000, 19000]}
// ]

// Generate a report showing:

// Each person's total sales
// Each person's average sales
// Who exceeded ₹15000 average (mark them as "Star Performer")

// Return format: [{name: "Name", total: X, average: Y, status: "Star/Regular"}]
// What it tests: Nested array operations. Using map on outer array while using forEach or reduce on inner arrays. Object creation. Conditional logic for status.

let sales = [
  { name: "Rajesh", sales: [20, 20, 20, 20] },
  { name: "Meera", sales: [30, 30, 30, 30] },
  { name: "Arjun", sales: [40, 40, 40, 40, 40] },
];

let totalSales = sales.map((obj) => {
  return obj.sales.reduce((sum, elem) => {
    return (sum += elem);
  });
});
// [80, 120, 200]

let lengths = sales.map((obj) => {
  return obj.sales.length;
});
// [4, 4, 5]

let avgs = totalSales.map((elem, index) => {
  return elem / lengths[index];
});
// [20, 30, 40]

let finalObj = sales.map((obj, index) => {
  let status = "Non Star Performer";
  if (avgs[index] > 10) {
    status = "Star Performer";
  }
  return {
    name: obj.name,
    total: totalSales[index],
    average: avgs[index],
    status: status,
  };
});

console.log(finalObj)

// What These Questions Teach:

// Q1-Q3: Basic method usage with real conditions
// Q4-Q5: Combining methods, understanding when to use what
// Q6-Q8: Multi-step logic, chaining operations
// Q9-Q12: Complex real-world scenarios, nested data, decision trees

// How to approach:

// Read question twice
// Identify what data you start with
// Identify what output you need
// Break down into steps: "First I need to..., then I need to..."
// Choose appropriate method for each step
// Code step by step, test each part

// These will actually build your logic muscles, not just syntax memorization.give more question jisse mera logic build ho3:13 PMMore Logic-Building Questions
// These will push your thinking further. Main focus: combining methods creatively and solving real problems.

//* Level 5: Pattern Recognition & Data Transformation
//* Q13: Duplicate Item Detector
// Shopping list: ["apple", "banana", "apple", "mango", "banana", "apple", "orange"]
// Create an object that shows how many times each item appears:
// javascript// Expected output: {apple: 3, banana: 2, mango: 1, orange: 1}
// What it tests: Using forEach to build an object dynamically. Understanding how to check if a key exists and increment values. Object manipulation.

//* Q14: Leaderboard Ranker
// Player scores: [450, 780, 450, 920, 780, 650, 920, 540]
// Tasks:

// Remove duplicate scores
// Sort in descending order
// Assign ranks (1st, 2nd, 3rd, etc.)
// Return array like: ["1st - 920", "2nd - 780", "3rd - 650", ...]

// What it tests: Using filter with indexOf to remove duplicates. Array sorting. Using map with index for ranking. Multi-step data processing.

//* Q15: Inventory Status Calculator
// Warehouse stock:
// javascript[
//   {product: "Rice", quantity: 45, minRequired: 50},
//   {product: "Wheat", quantity: 80, minRequired: 60},
//   {product: "Sugar", quantity: 30, minRequired: 40},
//   {product: "Salt", quantity: 100, minRequired: 70}
// ]
// Create three separate arrays:

// Critical: quantity < 50% of minRequired
// Low: quantity < minRequired but >= 50% of minRequired
// Adequate: quantity >= minRequired

// What it tests: Using filter multiple times with different complex conditions. Percentage calculations. Data categorization logic.

//* Level 6: String Manipulation + Arrays
//* Q16: Username Generator
// Full names: ["Rahul Kumar Sharma", "Priya Singh", "Amit Patel"]
// Generate usernames:

// Take first name
// Add first letter of each remaining name
// Add random number between 100-999
// Convert to lowercase
// Example: "Rahul Kumar Sharma" → "rahulks447"

// What it tests: String splitting, array manipulation, accessing specific indices, string methods, combining operations in map.

//* Q17: Hashtag Extractor
// Social media posts:
// javascript[
//   "Just finished my workout! #fitness #healthy #motivated",
//   "Loving this weather #summer #fun",
//   "New blog post out! Check it out #coding #javascript #webdev #learning"
// ]
// Extract all unique hashtags from all posts and return them in alphabetical order.
// Expected: ["#coding", "#fitness", "#fun", "#healthy", "#javascript", "#learning", "#motivated", "#summer", "#webdev"]
// What it tests: String splitting, nested arrays (use map to split each post, then flatten), removing duplicates, sorting. Multi-layer array processing.

//* Q18: Password Strength Validator
// Passwords: ["Pass123", "weakpass", "Str0ng!Pass", "12345678", "MyP@ssw0rd"]
// Check each password and create a report:
// javascript[
//   {password: "Pass123", strength: "Medium", reasons: ["Has uppercase", "Has numbers", "Missing special char"]},
//   // ... etc
// ]
// Strength rules:

// Strong: Has uppercase + lowercase + numbers + special chars + length >= 8
// Medium: Has 3 out of 4 criteria above
// Weak: Less than 3 criteria

// What it tests: Complex conditional logic, multiple checks per element, object creation with arrays, using map with detailed transformations.

// Level 7: Financial & Mathematical Logic
//* Q19: EMI Calculator Batch
// Loans:
// javascript[
//   {principal: 100000, rate: 10, months: 12},
//   {principal: 500000, rate: 8.5, months: 24},
//   {principal: 1000000, rate: 9, months: 36}
// ]
// ```

// Calculate monthly EMI for each using formula:
// ```
// EMI = P × r × (1+r)^n / ((1+r)^n - 1)
// where P = principal, r = monthly rate (annual/12/100), n = months
// Return array with principal and calculated EMI, sorted by EMI (highest first).
// What it tests: Complex mathematical operations, using Math.pow(), rounding to 2 decimals, map for calculations, sorting by calculated values.

//* Q20: Transaction Categorizer
// Bank transactions:
// javascript[
//   {id: 1, amount: -500, description: "Swiggy Food"},
//   {id: 2, amount: 15000, description: "Salary Credit"},
//   {id: 3, amount: -2000, description: "Rent Payment"},
//   {id: 4, amount: -150, description: "Metro Recharge"},
//   {id: 5, amount: 5000, description: "Freelance Income"},
//   {id: 6, amount: -1200, description: "Shopping Amazon"}
// ]
// Create a summary:
// javascript{
//   totalIncome: 20000,
//   totalExpense: 3850,
//   netSavings: 16150,
//   expenseCount: 4,
//   incomeCount: 2,
//   largestExpense: {id: 3, amount: -2000, description: "Rent Payment"}
// }
// What it tests: Using filter to separate, forEach or reduce concept to sum, finding maximum/minimum, building complex objects, multiple operations on same data.

//* Q21: Tax Bracket Calculator
// Incomes: [250000, 450000, 750000, 1200000, 350000]
// Indian tax slabs (old regime):

// 0-250000: 0%
// 250001-500000: 5%
// 500001-1000000: 20%
// Above 1000000: 30%

// Calculate tax for each income (tax is applied in brackets, not flat).
// Example: ₹750000 income:

// First ₹250000: ₹0
// Next ₹250000: ₹12500 (5%)
// Next ₹250000: ₹50000 (20%)
// Total tax: ₹62500

// What it tests: Complex conditional logic, understanding layered calculations, using helper functions within map, mathematical problem-solving.

// Level 8: Date & Time Operations
//* Q22: Subscription Expiry Tracker
// Users with subscription end dates:
// javascript[
//   {name: "Rahul", endDate: "2026-01-15"},
//   {name: "Priya", endDate: "2026-01-08"},
//   {name: "Amit", endDate: "2026-02-20"},
//   {name: "Sara", endDate: "2025-12-30"}
// ]
// Today is 2026-01-11. Categorize users:

// Expired: endDate < today
// Expiring Soon: endDate within next 7 days
// Active: endDate > 7 days from today

// What it tests: Working with Date objects, date comparisons, using filter with date logic, understanding time calculations.

//* Q23: Event Scheduler Validator
// Events:
// javascript[
//   {name: "Meeting", start: "09:00", end: "10:30"},
//   {name: "Lunch", start: "13:00", end: "14:00"},
//   {name: "Training", start: "10:00", end: "12:00"},
//   {name: "Call", start: "14:30", end: "15:00"}
// ]
// Check if:

// Any events overlap (return true/false)
// All events are within office hours (9:00 - 18:00)
// Total meeting time in hours

// What it tests: Time comparison logic, overlapping intervals problem, converting time strings to comparable values, using some/every creatively.

// Level 9: Nested Data & Complex Transformations
//* Q24: Student Grade Sheet Generator
// Class data:
// javascript[
//   {name: "Raj", subjects: {math: 85, science: 78, english: 92}},
//   {name: "Priya", subjects: {math: 95, science: 88, english: 85}},
//   {name: "Amit", subjects: {math: 65, science: 72, english: 70}}
// ]
// Generate report:
// javascript[
//   {
//     name: "Raj",
//     total: 255,
//     average: 85,
//     grade: "B",
//     topSubject: "english"
//   },
//   // ... etc
// ]
// Grade: A (>90), B (>75), C (>60), F (<60)
// What it tests: Working with nested objects, Object.values() or Object.entries(), finding maximum in object values, multiple calculations per item.

//* Q25: E-commerce Order Processor
// Orders:
// javascript[
//   {
//     orderId: 101,
//     customer: "Rahul",
//     items: [
//       {name: "Laptop", price: 45000, qty: 1},
//       {name: "Mouse", price: 500, qty: 2}
//     ],
//     coupon: "SAVE10" // 10% off
//   },
//   {
//     orderId: 102,
//     customer: "Priya",
//     items: [
//       {name: "Phone", price: 15000, qty: 1},
//       {name: "Cover", price: 300, qty: 1}
//     ],
//     coupon: null
//   }
// ]
// Process each order to show:

// Subtotal (sum of price × qty for all items)
// Discount amount (if coupon exists)
// Final total
// Item count

// What it tests: Nested array operations, conditional calculations, using forEach or map within map, building comprehensive objects.

//* Q26: Department Salary Analyzer
// Company data:
// javascript[
//   {
//     dept: "Engineering",
//     employees: [
//       {name: "A", salary: 80000},
//       {name: "B", salary: 95000},
//       {name: "C", salary: 75000}
//     ]
//   },
//   {
//     dept: "Marketing",
//     employees: [
//       {name: "D", salary: 60000},
//       {name: "E", salary: 70000}
//     ]
//   },
//   {
//     dept: "Sales",
//     employees: [
//       {name: "F", salary: 55000},
//       {name: "G", salary: 65000},
//       {name: "H", salary: 58000}
//     ]
//   }
// ]
// Create summary:
// javascript[
//   {
//     dept: "Engineering",
//     employeeCount: 3,
//     totalSalary: 250000,
//     avgSalary: 83333.33,
//     highestPaid: "B"
//   },
//   // ... etc
// ]
// Then find which department has highest average salary.
// What it tests: Multiple levels of nesting, calculations on nested arrays, finding max/min within nested structure, comparing calculated values across groups.

//* Level 10: Algorithm-Style Problems
//* Q27: Number Pattern Finder
// Numbers: [1, 2, 4, 8, 16, 32, 64]
// Check if array follows these patterns:

// Arithmetic progression (each increases by same amount)
// Geometric progression (each multiplies by same factor)
// Neither

// Return pattern name and common difference/ratio.
// What it tests: Mathematical pattern recognition, using every with index-based comparisons, understanding array relationships beyond individual elements.

//* Q28: Missing Number Detector
// You receive attendance IDs: [101, 102, 104, 105, 107, 108, 110]
// Range should be 101-110. Find all missing IDs.
// Expected: [103, 106, 109]
// What it tests: Working with ranges, using filter to check existence, understanding set operations, creating arrays from ranges.

//* Q29: Balanced Bracket Validator
// Expressions: ["(())", "(()", ")(", "()()", "((()))"]
// Check each if brackets are balanced:

// Every opening bracket has closing bracket
// They're in correct order

// Return: [true, false, false, true, true]
// What it tests: Stack-like thinking using arrays, push/pop concepts within forEach, character-by-character processing, validation logic.

//* Q30: Warehouse Optimization
// Items with size and priority:
// javascript[
//   {item: "Rice", size: 50, priority: 1},
//   {item: "Wheat", size: 30, priority: 2},
//   {item: "Sugar", size: 20, priority: 1},
//   {item: "Salt", size: 15, priority: 3},
//   {item: "Oil", size: 25, priority: 2}
// ]
// Truck capacity: 100kg
// Fill truck with highest priority items first (1 is highest). If items have same priority, choose smaller size first. Show what items you selected and remaining capacity.
// What it tests: Multi-criteria sorting, accumulation logic, conditional selection, understanding constraint problems, combining sort + filter concepts creatively.

let arr = ["apple", "mango", "apple"];
