# Requirements

- `Node v16+`
- `yarn`

# Run

```
yarn
yarn dev
```

# Project Structure

- `/` : Base directory, config files, package.json
- `/src`: Application root
- `/src/actions`: Redux actions creators and action type constants
- `/src/components`: Components
- `/src/pages`: Route page components
- `/src/reducers`: Redux reducers combined with `combineReducers`
- `/src/selectors`: Redux selectors
- `/src/types`: Typescript declarations

In addition to this base directory structure, this project has two modes (so far)

- local: Completely standalone, no external projects required (Home)
- flap: Client for Python/Flask back-end, requires `flap` (Schools)

Note that the `flap` part of this project is only required if you've been instructed to use it, if it's not detected/set up the app's `local` mode should work just fine.

Submission
To submit your results clone this repo and push it to your own git repository.

Create a new repo on your Github/Gitlab page

Clone this repo

cd flap-client

Change the origin

git remote set-url origin https://github.com/<user>/<repo>.git

git remote add upstream https://gitlab.com/pathcore-external/flap.git

git remote -v

Push to your repo

(Optional) Deploying to Github pages

Change package.json's homepage key to point to own repo (eg "homepage": "my-user.github.io/flap-client-submission")
Change package.json's scripts.build key to point to own repo (eg "build": "webpack --env.repo_name='flap-client-submission'")
Run yarn deploy

Email back to us with your repo and optionally your github pages url
