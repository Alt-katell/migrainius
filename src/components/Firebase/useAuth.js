import { useEffect, useState } from "react"
import getFirebaseInstance from "./firebase"
import loadFirebaseDependencies from "./loadFirebaseDependencies"

function useAuth() {
    const [user, setUser] = useState(null)
    const [firebase, setFirebase] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let unsubscribe
        let userProfileUnsubscribe

        loadFirebaseDependencies.then(app => {
            const firebaseInstance = getFirebaseInstance(app)
            setFirebase(firebaseInstance)

            unsubscribe = firebaseInstance.auth.onAuthStateChanged(userResult => {
                if (userResult) {
                  firebaseInstance.getUserProfile({
                    userId: userResult.uid
                  }).then(result => {
                    setUser({
                      ...userResult,
                      userName: result.empty ? null : result.docs[0].id
                    })
                  })

                    // setLoading(true);
                    // Promise.all([
                    //     firebaseInstance.getUserProfile({ userId: userResult.uid }),
                    //     firebaseInstance.auth.currentUser.getIdTokenResult(true),
                    // ]).then((result) => {
                    //     const userProfileResult = result[0]
                    //     const token = result[1]

                    //     if (userProfileResult.empty) {
                    //         userProfileUnsubscribe = firebaseInstance.db
                    //           .collection("userProfiles")
                    //           .where("userId", "==", userResult.uid)
                    //           .onSnapshot((snapshot) => {
                    //               const userProfileDoc = snapshot.docs[0]
                    //               if (userProfileDoc && userProfileDoc.id) {
                    //                   setUser({
                    //                       ...userResult,
                    //                       admin: token.claims.admin,
                    //                       username: userProfileDoc.id,
                    //                   })
                    //               }

                    //               setLoading(false)
                    //           })
                    //     } else {
                    //         const userProfileDoc = userProfileResult.docs[0]
                    //         if (userProfileDoc && userProfileDoc.id) {
                    //             setUser({
                    //                 ...userResult,
                    //                 admin: token.claims.admin,
                    //                 username: userProfileDoc.id,
                    //             })
                    //         }

                    //         setLoading(false)
                    //     }
                    // })
                } else {
                  setUser(null)
                }

                setLoading(false)
            })
        })

        return () => {
            if (unsubscribe) {
                unsubscribe()
            }

            if (userProfileUnsubscribe) {
                userProfileUnsubscribe()
            }
        }
    }, [])

    return { user, firebase, loading }
}

export default useAuth
