# Conference Schedule Tests

I registered to attend a 2-day tech conference and I wanted to plan which sessions I would like to attend for each hour.
It is important to know if any changes occur that might affect how I would make a decision for each hour. I could take
notes and then periodically spot check, but I decided instead to write a Playwright test that would assert the entire
schedule as I know it to be so that checking for changes could be as simple as running a test and seeing if it fails.

## Scripts

Install dependencies using `npm install`.

Run tests by running `npm test`.