import * as functions from 'firebase-functions'
import { add } from '@cashew/common'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((_request, response) => {
  response.send('Hello from Firebase!' + add(1, 2))
})
