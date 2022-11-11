import { auth } from "./firebase"

export const usersApi = {
    signIn: (email, password) => {
        return new Promise((resolve, reject) => {
            auth.signInWithEmailAndPassword(email, password)
                .then(({ user }) => {
                    resolve({
                        displayName: user.displayName,
                        email: user.email,
                    })
                })
                .catch((error) => reject(error.message))
        })
    },
    register: (email, password, displayName) => {
        return new Promise((resolve, reject) => {
            auth.createUserWithEmailAndPassword(email, password)
                .then(({ user }) => {
                    user.updateProfile({ displayName }).then(() => {
                        resolve({
                            displayName: user.displayName,
                            email: user.email,
                        })
                    })
                })
                .catch((error) => reject(error.message))
        })
    }
}