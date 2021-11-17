import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Login/Firebase/firebase.init";

//initialize firebase
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("")

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError("");
                const newUser = { email, displayName: name };
                setUser(newUser);
                //send user to firebase for further use
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/home')
            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location?.state?.from || "/home";
                history.replace(destination);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
        ;
    }
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || "/home";
                history.replace(destination);
                // const user = result.user;
                setAuthError("");
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    //Observe user presence
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        isLoading,
        authError,
        registerUser,
        signInUsingGoogle,
        loginUser,
        logOut
    }

}

export default useFirebase;