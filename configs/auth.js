import Credentials from "next-auth/providers/credentials"
import { JWT } from "next-auth/jwt"

export const authOptions = {
    providers: [
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email', required: true },
                password: { label: 'Password', type: 'password', required: true },
            },

            async authorize(credentials, req) {

                // Fetch query to check if user registered or not. return user data and tokenPair
                let user
                if (!credentials?.email || !credentials?.password) {
                    user = null
                }
                else if (credentials.email === 'admin@gmail.com' && credentials.password === 'admin1234') {
                    user = { firstName: 'admin', lastName: 'admin', email: credentials.email }
                }

                //

                if (user) return user
                else return null
            },
        })
    ],
    // callbacks: {
    //     async jwt({ token, user }) {

    //         return { ...token, ...user };
    //     },

    //     async session({ session, token, user }) {
    //         session.user = token;

    //         return session;
    //     },
    // },
    pages: {
        signIn: '/login'
    }
}