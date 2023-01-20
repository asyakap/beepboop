# Text analyzer
#### Mr. Roboger's Neighborhood

## Technologies Used

* _HTML_
* _CSS_
* JavaScript

## Description

_This webpage transfroms the number given by user to the phrase following rules._
* _For numbers that contain a 1, all digits are replaced with "Beep!"_
* _For numbers that contain a 2, all digits are replaced with "Boop!"_
* _For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"_


## Setup/Installation Requirements

* _You need a web browser_
* _From your browser open the following link: https://asyakap.github.io/beepboop/_


## Known Bugs

* _No known bugs_


## License

_If you run into a problem or in case you have any ideas or concerns please contact me._

Copyright (c) _01/20/2023_ _Asia Kaplanyan_

## Tests
Describe: beepboop()

Test: "It should return warning if number is empty."
Code:
const number = null;
beepboop(number);
Expected Output: "Please, enter an integer number > 0"

Test: "It should return warning if number is a negative non-integer or non-numeric."
Code:
const number = -1;
beepboop(number);
Expected Output: "Please, enter an integer number > 0"

Test: "It should return all numbers preceding to the number."
Code:
const number = 5;
beepboop(number);
Expected Output: 1, 2, 3, 4, 5

Test: "If number contains 3, replace it with "Won't you be my neighbor?"."
Code:
const number = 5;
beepboop(number);
Expected Output: 1, 2, "Won't you be my neighbor?", 4, 5

Test: "If number contains 2, replace it with "Boop!"."
Code:
const number = 5;
beepboop(number);
Expected Output: 1, "Boop!, "Won't you be my neighbor?", 4, 5

Test: "If number contains 1 replace it with "Beep!"."
Code:
const number = 5;
beepboop(number);
Expected Output: "Beep!", "Boop!, "Won't you be my neighbor?", 4, 5

Test: "Make sure the following hierarchy of symbols followed: 3 over 2 over 1."
Code:
const number = 5;
beepboop(number);
Expected Output: "Beep!", "Boop!, "Won't you be my neighbor?", 4, 5