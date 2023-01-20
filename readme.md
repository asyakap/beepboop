# Text analyzer
#### Mr. Roboger's Neighborhood

## Technologies Used

* _HTML_
* _CSS_
* JavaScript

## Description

_This webpage transfroms the number given by user to the phrase following rules._

## Setup/Installation Requirements

* _You need a web browser_


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
Expected Output: 1, 2, 3, 4, 5.