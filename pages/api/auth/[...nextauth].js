import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        /**
         * This function is used to define if the user is authenticated or not.
         * If authenticated, the function should return an object contains the user data.
         * If not, the function should return `null`.
         */
        if (credentials == null) return null
        /**
         * credentials is defined in the config above.
         * We can expect it contains two properties: `email` and `password`
         */
        try {
          const res = await axios.post('http://127.0.0.1:1337/api/auth/local', {
            identifier: credentials.username,
            password: credentials.password
          })
          console.log('Success ', res)
          return res.data
        } catch (e) {
          console.log('Error ', e)
          throw new Error(e.response.data.error.message)
        }
      }
    })
  ],
  callbacks: {
    session: async ({ session, token }) => {
      session.user.id = token.id
      session.jwt = token.jwt
      return Promise.resolve(session)
    },
    jwt: async ({ token, user }) => {
      const isSignIn = user ? true : false
      if (isSignIn) {
        token.id = user.id
        token.jwt = user.jwt
      }
      return Promise.resolve(token)
    }
  }
  //   ,
  //   pages: {
  //     signIn: '/signin'
  //   }
})
