import CredentialsProvider from "next-auth/providers/credentials"
import { use } from "react";

export const authOptions = {
    
    providers: [
        CredentialsProvider({
            
            credentials: {
                email: { label: 'Email', type: 'email', required: true },
                password: { label: 'Password', type: 'password', required: true },
            },

            async authorize(credentials) {

                // Fetch query to check if user registered or not. return user data and tokenPair
                // let user
                // if (!credentials?.email || !credentials?.password) {
                //     user = null
                // }
                // else if (credentials.email === 'admin@gmail.com' && credentials.password === 'admin1234') {
                //     user = { firstName: 'admin', lastName: 'admin', email: credentials.email }
                // }
                
                const localhost = process.env.NEXT_PUBLIC_API_LOCALHOST
                const res = await fetch(`${localhost}/api/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });
                const user = await res.json()

                return user
            },
        }),
    ],
    callbacks: {
        async signIn({user}) {
            if (user.code === 'invalid.user.credentials') {
                throw new Error(user.description)
            }
            else return user
        },

        async jwt({ token, user }) {

            return { ...token, ...user };
        },

        async session({ session, token, user }) {
            session.user = token;

            return session;
        },
    },
    pages: {
        signIn: '/login',
        profile: '/profile',
        eventCreation: '/events/add'
    },
    secret: process.env.NEXTAUTH_SECRET
}