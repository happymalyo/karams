import { ref, computed } from "vue";
import { supabase } from "@/lib/supabaseClient";

export function useAuth() {
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const checkUser = async () => {
    try {
      const {
        data: { session },
      } = supabase.auth.getSession();
      user.value = session ? session.user : null;
    } catch (e) {
      console.error("Error checking user", e);
    }
  };

  // Initialize auth state
  checkUser();

  // Listen for auth changes
  supabase.auth.onAuthStateChange((_event, session) => {
    user.value = session?.user ?? null;
  });

  const signInWithGoogle = async () => {
    try {
      loading.value = true;
      error.value = null;
      const { error: signInError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (signInError) throw signInError;
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  };

  const signInWithFacebook = async () => {
    try {
      loading.value = true;
      error.value = null;
      const { error: signInError } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (signInError) throw signInError;
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  };

  const signOut = async () => {
    try {
      loading.value = true;
      error.value = null;
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    user,
    loading,
    error,
    signInWithGoogle,
    signInWithFacebook,
    signOut,
    isAuthenticated: computed(() => !!user.value),
  };
}
