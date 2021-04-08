# indexedDB Budget Tracker :

I added functionality to an existing budget tracker application to allow for offline access and functionality using IndexedDB, service workers, and cashe storage.

Project link: https://rocky-headland-72531.herokuapp.com/

## Overview

![main](https://user-images.githubusercontent.com/57735283/104964801-08a41380-5992-11eb-9892-e51d266cf2b6.PNG)

<p>Offline Functionality:</p>
<ul>
  <li>Enter deposits offline</li>
  <li>Enter expenses offline</li>
  <li>Offline reloads refresh charts with offline entries</li>
</ul>
<p>When brought back online:</p>
<ul>
  <li>Offline entries are added to tracker</li>
</ul>

![onlineDeposits](https://user-images.githubusercontent.com/57735283/104968320-54f35180-599a-11eb-96f7-21a053759a2e.gif)

![onlineExpenses](https://user-images.githubusercontent.com/57735283/104968321-558be800-599a-11eb-8dd5-51a5e7fa8213.gif)

![offlineFunctionality](https://user-images.githubusercontent.com/57735283/104968317-545abb00-599a-11eb-9048-7f245d6f60bb.gif)

![reloadOffline](https://user-images.githubusercontent.com/57735283/104968323-558be800-599a-11eb-9fe9-bd7c91756678.gif)

![offlineTransactionReload](https://user-images.githubusercontent.com/57735283/104968319-54f35180-599a-11eb-9171-7902cd17dc59.gif)

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

## Credits
* Trilogy Education Services for project setup

## Badges
<a href="https://img.shields.io/badge/CSS-13.4%25-yellow"><img alt="HTML Usage" src="https://img.shields.io/badge/CSS-13.4%25-yellow"></a> <a href="https://img.shields.io/badge/CSS-4.4%25-purple"><img alt="CSS Usage" src="https://img.shields.io/badge/CSS-4.4%25-purple"></a> <a href="https://img.shields.io/badge/JavaScript-82.2%25-yellow"><img alt="Javascript usage" src="https://img.shields.io/badge/JavaScript-82.2%25-yellow"></a><a href="https://img.shields.io/badge/Backend-Node.js-green"><img alt="Node.js" src="https://img.shields.io/badge/Backend-Node.js-green"></a> <a href="https://img.shields.io/badge/Backend-Express.js-green"><img alt="Express.js" src="https://img.shields.io/badge/Backend-Express.js-green"></a> <a href="https://img.shields.io/badge/Database-MongoDB-yellow"><img alt="database used MongoDB" src="https://img.shields.io/badge/Database-MongoDB-yellow"></a> <a href="https://img.shields.io/badge/Deployment-Heroku-purple"><img alt="deployed using Heroku" src="https://img.shields.io/badge/Deployment-Heroku-purple"></a>

