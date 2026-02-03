npm init -y

npm install cypress

npx cypress open

Create new spec



HTML Report Process

npm install mochawesome --save-dev

npm install mochawesome-merge --save-dev

npx cypress run --reporter mochawesome

npx mochawesome-merge "cypress/report/mochawesome*.json" > cypress/report/report1.json

npx mochawesome-merge "cypress/report/mochawesome*.json" --output cypress/report/report1.json

npx marge cypress/report/report1.json --reportDir ./ --inline
