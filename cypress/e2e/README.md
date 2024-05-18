<!-- Att installera för att köras test-koden
--------------------------------------------------
npm install cypress --save-dev
 --install to millijön for cypress-test

npm i --save-dev @types/jest
 --hanteras error till "describe" i test-code

npm install --save-dev cypress @types/cypress
--hanteras error till "cy" i test-code
----------------------------------------------------

Syftet med att skapa e2e: reviews.spec.cy.ts

Eftersom tyvärr funkar det inte med /filmer/573a139ef29313caabcfbd6a eller /filmer[id] för att fånga URL. Jag är osäker om det är bästa practice att jag skapade en file som heter "test-reviews"((pages)/test-reviews/page.tsx) för att endast användas med E2E-test. 
Att fånga URL med cy.visit('http://localhost:3000/test-reviews');

Första testet i "reviews.spec.cy.ts" kontrollerar att alla fälten som namne, betyg och kommentar fylls i korrekt. 
När man trycker på submit skickas en recension till MongoDB och sedan renderas den på /sendReview.

Det andra testet testar en eventuell misslyckad scenarion där kommentarsfältet är tomt. Det förväntas då att det visas "Fyll i det här fältet" efter att man har tryckt på knappen, vilket förhindrar att en recension skickas till MongoDB. -->
