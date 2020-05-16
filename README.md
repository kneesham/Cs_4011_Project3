1. Must allow for users to log in and authenticate.
For this I just used a "basic" login screen and then logged the user in if they existed, issuing them a Bearer token if they did, and then authenticating that token.

2. Must have at least 3 separate pages / views that derive their data from the backend.
I have 3 pages "All Results", "Record Book", and "Upload" as well as a "Sign Out" page.
The first page "All Results" is used to display every single record that a user has ever recorded in the history of ever!
The second page "Record Book" is used to just display the records in which the user had the lowest time.
The third page "Upload" I didn't want to go with manual form data input so I used Tesserect.js in order to upload a picture of the result screen from Celeste.
Knowing that not everyone owns this game I included screenshots that you can upload in the **src/img/example*.png** to test if the uploads work.
 