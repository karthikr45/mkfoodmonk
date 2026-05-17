import AuthShell from "@/components/AuthShell";
import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Sign up — mkfoodmonk",
};

export default function SignupPage() {
  return (
    <AuthShell>
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
