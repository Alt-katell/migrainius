import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_APP_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_APP_DATABASE_URL,
  projectId: process.env.GATSBY_APP_PROJECT_ID,
  storageBucket: process.env.GATSBY_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_APP_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_APP_ID
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.store = firebase.firestore
    this.auth = firebase.auth
  }
}

export default new Firebase()
