import React, { useEffect, useState, createContext, useContext } from "react";
import supabase from "../../utils/supabase/supabaseClient";

const UserContext = createContext({ user: null, session: null });

export const UserContextProvider = () => {
  //   const [session, setSession] = useState(null);
  //   const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     const session = supabase.auth.session();
  //     setSession(session);
  //     setUser(session?.user ?? null);
  //     //
  //     const { data: authListener } = supabase.auth.onAuthStateChange(
  //       async (event, session) => {
  //         setSession(session);
  //         setUser(session?.user ?? null);
  //       }
  //     );
  //     return () => {
  //       authListener.unsubscribe();
  //     };
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   const value = {
  //     session,
  //     user,
  //   };

  //   return <UserContext.Provider value={value} {...props} />;

  return <div>waiting to deploy if needed</div>;
};

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error(`useUser must be used within a UserContextProvider`);
//   }
//   return context;
// };
