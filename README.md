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

Added a way keep the decimal points at a max of 3 using .toFixed and parseFloat to keep the averages from being strings.



//Temporarily Abandoned

From what I read it seems like I might have to change a bunch of code to fix the object order so I decided not to risk breaking everything.

Commented out the lines that made it so an error is thrown when a course id and assignment group do not belong together because Im not entirely sure how to make sure its working.
I also stopped trying to account for potential errors in the data that the program receives for the same reason.