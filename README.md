# indexedDB Budget Tracker

## Description
  <p>I added functionality to an existing budget tracker application to allow for offline access and functionality using IndexedDB, service workers, and cashe storage.</p>

* Project link: https://rocky-headland-72531.herokuapp.com/

![main](https://user-images.githubusercontent.com/57735283/104964801-08a41380-5992-11eb-9892-e51d266cf2b6.PNG)

## Overview
<p>Offline Functionality:</p>

<ul>
  <li>Enter deposits offline</li>
  <li>Enter expenses offline</li>
  <li>Offline page reloads refresh charts with offline entries</li>
</ul>
<p>When brought back online:</p>
<ul>
  <li>Offline entries are added to tracker</li>
</ul>

## User Story
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling

## Business Context
Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Acceptance Criteria
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.

## Technologies

### IndexedDb - 
-  a low-level API for client-side storage of significant amounts of structured data
### Service Workers 
 - a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction
### Cache Storage API
- allows the service worker to cache routes and responses to help make the app functional offline
