import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button.tsx";
import { useState } from "react";

export const SignInOAuthButton = () => {
  const { signIn, isLoaded } = useSignIn();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isLoaded) return null;

  const signInWithGoogle = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/auth-callback",
      });
    } catch (error) {
      console.error("Error in sign in with google", error);
      setIsSubmitting(false);
    }
  };

  return (
    <Button
      onClick={signInWithGoogle}
      disabled={isSubmitting || !isLoaded}
      variant="secondary"
      className="w-full text-white border-zinc-200 h-11"
    >
      {isSubmitting ? "Redirecting..." : "Continue with Google"}
    </Button>
  );
};
