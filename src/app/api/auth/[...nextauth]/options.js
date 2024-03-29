import CredentialsProvider from "next-auth/providers/credentials";
import { isAuthValid } from "@/app/lib/handleData";


export const options = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const {email, password} = credentials;

        // Check if the email and password are valid
        const { success, user } = await isAuthValid(email, password);

        if (success) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
