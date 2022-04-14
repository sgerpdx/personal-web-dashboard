async function signInWithEmail() {
  const { user, error } = await supabase.auth.signIn({
    email: "example@email.com",
    password: "example-password",
  });
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
}
