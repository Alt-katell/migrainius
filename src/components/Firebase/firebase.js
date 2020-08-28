import firebaseConfig from "./config"
// import axios from 'axios'

class Firebase {
  constructor(app) {
    if(!firebaseInstance) {
      app.initializeApp(firebaseConfig)

      this.auth = app.auth()
      this.db = app.firestore()
      this.functions = app.functions()
      this.storage = app.storage()
    }
  }

  async getUserProfile({userId}) {
    return this.db.collection('userProfiles').where('id', '==', userId).get()
  }

  async signup({userName, email, password}) {
    const newUser = await this.auth.createUserWithEmailAndPassword(email, password)
    return this.db.collection('userProfiles').doc(newUser.user.uid).set({
      userName: userName
    })
  }

  async resetPassword({email}) {
    return this.auth.sendPasswordResetEmail(email)
  }

  async login({email, password}) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  async logout() {
    await this.auth.signOut()
  }

  addMigraine({data, userId}) {
    const userRef = this.db.collection("userProfiles").doc(userId)
    const newMigraine = {
      startHour: data.startHour,
      endHour: data.endHour,
      medicationTaken: data.medicationTaken,
      medicationName: data.medicationName,
      medicationQuantity: data.medicationQuantity,
      medicationEfficiency: data.medicationEfficiency,
      activityAtStart: data.activityAtStart,
      hypoglycemic: data.hypoglycemic,
      physicalActivity: data.physicalActivity,
      stressed: data.stressed,
      angry: data.angry,
      hoursOfSleep: data.hoursOfSleep,
      minutesOfSleep: data.minutesOfSleep,
      intensity: data.intensity,
      user: userRef
    }
    return this.db.collection("migraines").add(newMigraine)
  }
}

let firebaseInstance;

function getFirebaseInstance(app) {
  if (!firebaseInstance && app) {
    firebaseInstance = new Firebase(app)
    return firebaseInstance
  } else if (firebaseInstance) {
    return firebaseInstance
  } else {
    return null
  }
}

export default getFirebaseInstance
