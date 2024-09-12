// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { query } from "../../../lib/db";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials;
          const [user] = await query(`SELECT * FROM users WHERE email = ?`, [email]);

          if (!user) throw new Error("No user found with that email");

          const isValid = bcrypt.compareSync(password, user.password);
          if (!isValid) throw new Error("Incorrect password");

          return user;
        } catch (error) {
          console.error("Authorize Error:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, req }) {
      try {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const device = req.headers['user-agent'];

        const [existingUser] = await query(`SELECT * FROM users WHERE email = ?`, [user.email]);

        if (!existingUser && account.provider === 'google') {
          await query(
            `INSERT INTO users (name, email, google_id, provider) VALUES (?, ?, ?, ?)`,
            [user.name, user.email, account.id, 'google']
          );
        }

        const loggedInUser = existingUser || user;
        await query(
          `INSERT INTO devices (user_id, ip_address, device_info) VALUES (?, ?, ?)`,
          [loggedInUser.id, ip, device]
        );

        await query(
          `DELETE FROM devices WHERE user_id = ? AND id NOT IN (
            SELECT id FROM (SELECT id FROM devices WHERE user_id = ? ORDER BY created_at DESC LIMIT 5) temp
          );`,
          [loggedInUser.id, loggedInUser.id]
        );

        return true;
      } catch (error) {
        console.error("Sign-In Error:", error);
        return false;
      }
    }
  },
  pages: {
    signIn: '/sign-up',
  },
  debug: true,
};

export default NextAuth(authOptions);
