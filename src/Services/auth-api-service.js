

const AuthApiService = {
    postLogin({ user_name, password }) {
        return fetch(`https://floating-cove-02750.herokuapp.com/api/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ user_name, password }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default AuthApiService