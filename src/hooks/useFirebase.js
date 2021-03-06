import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'

initializeAuthentication() 

const useFirebase = () =>{
    const [user, setUser] = useState({})

    const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth()

    const googleSignIn = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .finally(()=> setIsLoading(false))
    }

    // observer 

    useEffect( () =>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=>unsubscribed
    }, [])

    const logOut = () =>{
        signOut(auth)
        .then(()=>{ })
        .finally(()=> setIsLoading(false))
    }

    return {
        user,
        googleSignIn,
        logOut,
        isLoading,

    }
}

export default useFirebase