# SBA2

Used .map to find learner_id and for loop to grt only unique ids

Created array of objects in an arrow function adding placeholder areas for the assignment averages and total averages. Also added unique ids using .map method


Found all assignments and grades using for loops and if conditionals and calculated the average of the assignment grades as well as the total score possible.

Inserted and pushed everything into the object

///

Added a way to remove grades not due yet and deduct points for late submissions.
It did fix the final result.

Added a boolean to see if the assignment being due is true or false along with an if else statement.

Added an if else and continue when recalling and renaming the learnerObjects

Replaced the learner_id for loop with a for of loop

Wrapped everything in a try/catch statement 

Made it so an error is thrown when a course id and assignment group do not belong together.


///To Do

Now I have to find a way keep the decimal points at a max of 3

Still have to fix the object order for some reason the assignments are coming before the learner id.

Have to account for potential errors in the data that the program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? 