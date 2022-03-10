# firebase-yarn-workspace

FYI: This mono-repo is not working (when deploy) example and throw error when deploy.
I only use this for reproduce this issue 👉 https://github.com/firebase/firebase-tools/issues/653

```shell
✔  functions: Finished running predeploy script.
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
✔  functions: required API cloudbuild.googleapis.com is enabled
✔  functions: required API cloudfunctions.googleapis.com is enabled
i  functions: preparing functions directory for uploading...
i  functions: packaged functions (2.18 KB) for uploading
✔  functions: functions folder uploaded successfully
i  functions: updating Node.js 16 function helloWorld(us-central1)...

Functions deploy had errors with the following functions:
        helloWorld(us-central1)
i  functions: cleaning up build files...

Error: There was an error deploying functions
```

## To try

```shell
yarn
cd packages/common
yarn build
cd ../firebase/functions
yarn build
yarn serve
yarn deploy
```
