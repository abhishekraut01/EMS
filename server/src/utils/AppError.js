class AppError extends Error {
  constructor(
    message = 'Internal server error', 
    statusCode = 500, 
    errors = [], 
    stack = ''  
  ) {
    super(message); 
    this.statusCode = statusCode; 
    this.success = false;  
    this.errors = errors; 
    this.isOperational = true; // Distinguish operational vs programming errors
    // Handle the stack trace
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor); // Auto-capture stack trace
    }
  }
}
