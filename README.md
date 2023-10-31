# Ski Test and Automation Challenge

## Create a test strategy for the Ski Challenge

### Existing feature: Crash!

#### Acceptance Criteria

- When the skier hits an obstacle it should crash and stop
- Moments later the rhino will come and eat the skier
- The user can use the right, down and left keys to try to recover and continue the run before the rhino comes and eats the skier

### Existing feature: Get eaten by Rhino!

#### Acceptance Criteria

- When the skier starts the run a rhino will follow a bit behind
- The rhino will catch up since it's faster

### New Feature: Jump!

#### Acceptance Criteria

- Have the skier jump by pressing a key
- Have the skier jump whenever he hits a ramp.
- The skier should be able to jump over some obstacles while in the air.
  - Rocks can be jumped over
  - Trees can NOT be jumped over

### New Feature: Restart!

#### Acceptance Criteria

- Have the skier restart the run by pressing a key
- A message should show on screen with the key to press

## Bugs found

### Bug 1

When the last key pressed is left-arrow, when we refresh the browser the game doesn't start, shows a blank page and this error in the console

![console error](https://i.ibb.co/k61kMt3/Screenshot-2023-10-31-at-19-13-22.png)

#### Steps:

1. start the game (open the link or refresh the page)
1. press the left arrow key
1. skier crashes or gets eaten by the rhino
1. when we refresh the page the game doesn't start, shows a blank page and an error in the console

#### Notes:

This doesn't occur exactly like the steps mentioned above 100% of the times.
I was able to do it consistently for a while but then not.
I'm not sure if there's a random behaviour or if some status changes once it happens.

# Test Automation Challenge

## Cypress tests

### How to run the tests

1. Clone the repo with `git clone`
1. Install dependencies with `npm install`
1. Run the tests with `npm test`

## Improvements to do

- [ ] Add to CI
- [ ] POM
- [ ] add users to fixtures
- [ ] save cookie for login
- [ ] do this challenge with webdriver.io
