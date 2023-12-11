//password strength checker
function checkPasswordStrength(password) {
    
    let score = 0;
    const criteria = {
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
      symbol: /[^a-zA-Z0-9]/,
    };
  
    // Check password length
    if (password.length < 8) {
      console.log("Password is too short (less than 8 characters).");
    } else {
      score++;
    }
  
    // Check for uppercase letter
    if (criteria.uppercase.test(password)) {
      score++;
    }
  
    // Check for lowercase letter
    if (criteria.lowercase.test(password)) {
      score++;
    }
  
    // Check for number
    if (criteria.number.test(password)) {
      score++;
    }
  
     // Check for symbol
    if (criteria.symbol.test(password)) {
      score++;
    }
  
    switch (score) {
      case 1:
        console.log("Weak password.");
        break;
      case 2:
        console.log("Moderately weak password.");
        break;
      case 3:
        console.log("Average password.");
        break;
      case 4:
        console.log("Strong password.");
        break;
      case 5:
        console.log("Excellent password.");
        break;
      default:
        console.log("Invalid password.");
    }
  }
  
  checkPasswordStrength("passw0rd"); // Output: "Average password."
  checkPasswordStrength("P@ssw0rd123"); // Output: "Strong password."