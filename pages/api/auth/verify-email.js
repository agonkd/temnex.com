import { query } from "../../lib/db";

export default async function VerifyEmail({ token }) {
  // Verify token and mark email as verified
  await query(`UPDATE users SET email_verified = 1 WHERE token = ?`, [token]);

  return <div>Email verified successfully! You can now log in.</div>;
}

export async function getServerSideProps(context) {
  const { token } = context.query;
  return { props: { token } };
}
