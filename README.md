# Feedback!

I was instructed to build a full stack feedback portal modeled after the one at Prime Digital Academy.
<br/>
I did this with the following technologies
<br/>

> Node.js | Express | React | Redux | Postgresql 

<br/>
A demo of this application can be found here 

> https://morning-plateau-73028.herokuapp.com/#/
<br/>

## Description
<p>I developed a multi-view looping application using a series of react components in a React-Router switch setup.
The data from each page is gathered in a Redux reducer, and sent to a database with axios from the reducer after it has been reviewed. A page load function uses axios to pull all lines from the db into a second reducer to display on the admin page. I used a couple of conditonal renders, one for the edit toggle on the review page, and another on my admin page to enable a 'flag for review' functionality that interacts with the database. The delete button naturally deletes a specific entry from the db. This application was styled with mobile access in mind. </p>

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
