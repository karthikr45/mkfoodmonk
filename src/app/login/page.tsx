import AuthShell from "@/components/AuthShell";
import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Log in — mkfoodmonk",
};

export default function LoginPage() {
  return (
    <AuthShell>
      <AuthForm mode="login" />
    </AuthShell>
  );
}
