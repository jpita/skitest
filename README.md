# Ski Test and Automation Challenge

## Create a test strategy for the Ski Challenge

### Feature List

#### Existing feature: Ski down the hill!

#### Acceptance Criteria

- When the skier starts the run it will go down the hill
- The user can use the right, down and left keys to change direction and avoid obstacles

#### Existing feature: Crash!

#### Acceptance Criteria

- When the skier hits an obstacle it should crash and stop
- Moments later the rhino will come and eat the skier
- The user can use the right, down and left keys to try to recover and continue the run before the rhino comes and eats the skier

#### Existing feature: Get eaten by Rhino!

#### Acceptance Criteria

- When the skier starts the run a rhino will follow a bit behind
- The rhino will catch up since it's faster

#### New Feature: Jump!

#### Acceptance Criteria

- Have the skier jump by pressing a key
- Have the skier jump whenever he hits a ramp.
- The skier should be able to jump over some obstacles while in the air.
  - Rocks can be jumped over
  - Trees can NOT be jumped over

#### New Feature: Restart!

#### Acceptance Criteria

- Have the skier restart the run by pressing a key
- A message should show on screen with the key to press

### Test Strategy

Objective:

- To ensure that the skier can perform all the game functionalities, such as turning, crashing, evading the rhino, jumping over obstacles, and restarting the game.

Scope:

- Test the skier's actions against obstacles
- Test the rhino chasing the skier and the possible outcomes
- Test the skier's ability to jump and the scenarios where the skier can and cannot jump over obstacles
- Test the game's restart mechanism

#### Test Plan

Test Environment:

- Different Browsers (Chrome, Firefox, Safari, etc.)
- Different screen sizes and resolutions
- Different devices (desktop, mobile, tablet, etc.)

#### Test Cases

Feature: Ski down the hill!

- Test Case 0.1: Start the run, observe skier.
  - Expected Outcome: Skier starts the run.
- Test Case 0.2: User uses right, down, and left keys.
  - Expected Outcome: Skier changes direction accordingly.
- Test Case 0.3: Skier approaches a ramp.
  - Expected Outcome: Skier jumps automatically.

Feature: Crash!

- Test Case 1.1: Skier hits an obstacle.

  - Expected Outcome: Skier should crash and stop.

- Test Case 1.2: Rhino approaching after skier crashes.
  - Expected Outcome: Rhino comes a few moments after the skier crashes.
- Test Case 1.3: User uses right, down, and left keys post-crash.
  - Expected Outcome: Skier tries to recover and continue before the rhino comes. 2.

Feature: Get eaten by Rhino!

- Test Case 2.1: Start the run, observe rhino.
  - Expected Outcome: A rhino follows the skier shortly after the start.
- Test Case 2.2: Rhino chasing skier.
  - Expected Outcome: Rhino catches up since it's faster. 3. Feature: Jump!
- Test Case 3.1: Skier jumps using the designated key.
  - Expected Outcome: Skier jumps.
- Test Case 3.2: Skier approaches a ramp.
  - Expected Outcome: Skier jumps automatically.
- Test Case 3.3: Skier tries to jump over a rock.
  - Expected Outcome: Successfully jumps over.
- Test Case 3.4: Skier tries to jump over a tree.

Feature: Restart!

- Test Case 4.1: User presses the designated key for restart.
  - Expected Outcome: The game restarts.
- Test Case 4.2: Observe screen post-crash for restart message.
  - Expected Outcome: A message appears indicating which key to press to restart.

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

- [ ] Add to CI https://github.com/jpita/skitest/actions
- [ ] POM
- [ ] add users to fixtures
- [ ] save cookie for login
- [ ] do this challenge with webdriver.io
