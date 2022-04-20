import supabase from "../../../utils/supabase/supabaseClient";

export default async function handler(req, res) {
  await supabase.auth.api.setAuthCookie(req, res);
}
