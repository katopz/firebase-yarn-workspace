# firebase-yarn-workspace

FYI: This mono-repo is ~~not~~ working with [firelink](https://github.com/rxdi/firelink) (when deploy) example and throw error when deploy.
I only use this for reproduce this issue 👉 https://github.com/firebase/firebase-tools/issues/653

```shell
✔  functions: Finished running predeploy script.
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
✔  functions: required API cloudbuild.googleapis.com is enabled
✔  functions: required API cloudfunctions.googleapis.com is enabled
i  functions: preparing functions directory for uploading...
i  functions: packaged functions (4.42 KB) for uploading
✔  functions: functions folder uploaded successfully
i  functions: updating Node.js 16 function helloWorld(us-central1)...
✔  functions[helloWorld(us-central1)] Successful update operation.
Function URL (helloWorld(us-central1)): https://us-central1-foo-bar-fake-url.cloudfunctions.net/helloWorld
i  functions: cleaning up build files...

✔  Deploy complete!
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
