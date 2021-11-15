import NextAuth, { Account, Profile, User } from "next-auth";
import Providers from "next-auth/providers";
import { api } from "services/api";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_KEY,
      scope: "read:user",
      domain: process.env.NEXTAUTH_URL,
    }),
  ],
  callbacks: {
    async session(session) {
      const { data } = await api.get(`/search/users?q=${session.user?.email}`);
      return { ...session, userName: data.items[0].login };
    },
  },
});
