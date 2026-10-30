// import { useDispatch, useSelector } from "react-redux";
// import { addUser, logOut } from "../features/AuthFeatures/authSlice";
// import { useCallback } from "react";

// const Register_key = "register_user"
// const AUTH_KEY = "auth_user";


// const getLocalStorageArray = (key) => {
//   try {
//     const item = localStorage.getItem(key);
//     if (!item) return [];
//     const parsed = JSON.parse(item);
//     return Array.isArray(parsed) ? parsed : [];
//   } catch (error) {
//     console.error(`Error reading "${key}" from localStorage:`, error);
//     return [];
//   }
// };

// const useAuth = () => {
//   const dispatch = useDispatch()
//   const { user, isAuthenticated } = useSelector(
//     (state) => state.authLogin
//   );

//     const register = useCallback((userData) => {
//     try {
//       const users = getLocalStorageArray(Register_key);
//       const normalizedEmail = userData.email.trim().toLowerCase();

//       const emailExists = users.some(
//         (u) => u.email.toLowerCase() === normalizedEmail
//       );

//       if (emailExists) {
//         return {
//           success: false,
//           message: "Email is already registered.",
//         };
//       }

//       const newUser = {
//         id: Date.now(),
//         name: userData.name.trim(),
//         email: normalizedEmail,
//         phone: userData.phone.trim(),
//         password: userData.password,
//         createdAt: new Date().toISOString(),
//       };

//       localStorage.setItem(Register_key, JSON.stringify([...users, newUser]));

//       return {
//         success: true,
//         message: "Registration successful! Please sign in.",
//       };
//     } catch (error) {
//       console.error("Registration error:", error);
//       return {
//         success: false,
//         message: "An unexpected error occurred during registration.",
//       };
//     }
//   }, []);


//      const login = useCallback(
//     ({ email, password }) => {
//       try {
//         const users = getLocalStorageArray(Register_key);
//         const normalizedEmail = email.trim().toLowerCase();

//         const foundUser = users.find(
//           (u) =>
//             u.email.toLowerCase() === normalizedEmail && u.password === password
//         );

//         if (!foundUser) {
//           return {
//             success: false,
//             message: "Invalid email or password.",
//           };
//         }

//         // Sanitize auth session (Exclude password and createdAt)
//         const sessionUser = {
//           id: foundUser.id,
//           name: foundUser.name,
//           email: foundUser.email,
//           phone: foundUser.phone,
//         };

//         localStorage.setItem(AUTH_KEY, JSON.stringify(sessionUser));
//         dispatch(addUser(sessionUser));

//         return {
//           success: true,
//           message: `Welcome back, ${sessionUser.name}!`,
//         };
//       } catch (error) {
//         console.error("Login error:", error);
//         return {
//           success: false,
//           message: "An error occurred while logging in.",
//         };
//       }
//     },
//     [dispatch]
//   );

//     const logout = useCallback(() => {
//     try {
//       localStorage.removeItem(AUTH_KEY);
//       dispatch(logOut());
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   }, [dispatch]);


//     const restoreUser = useCallback(() => {
//     try {
//       const savedUser = JSON.parse(localStorage.getItem(AUTH_KEY));
//       if (savedUser && savedUser.id && savedUser.email) {
//         dispatch(addUser(savedUser));
//       }
//     } catch (error) {
//       console.error("Failed to restore user:", error);
//       localStorage.removeItem(AUTH_KEY);
//     }
//   }, [dispatch]);

//     console.log(user,isAuthenticated);

//   return {
//     user,
//     isAuthenticated,
//     register,
//     login,
//     logout,
//     restoreUser,
//   };
// };

// export default useAuth;








import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, logout as logoutAction } from "../features/AuthFeatures/authSlice.jsx";

const USERS_KEY = "register_users";
const AUTH_KEY = "auth_user";

const getLocalStorageArray = (key) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return [];
    const parsed = JSON.parse(item);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error(`Error reading "${key}" from localStorage:`, error);
    return [];
  }
};

 const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  // REGISTER
  const register = useCallback((userData) => {
    try {
      const users = getLocalStorageArray(USERS_KEY);
      const normalizedEmail = userData.email.trim().toLowerCase();

      const emailExists = users.some(
        (u) => u.email.toLowerCase() === normalizedEmail
      );

      if (emailExists) {
        return {
          success: false,
          message: "Email is already registered.",
        };
      }

      const newUser = {
        id: Date.now(),
        name: userData.name.trim(),
        email: normalizedEmail,
        phone: userData.phone.trim(),
        password: userData.password,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));

      return {
        success: true,
        message: "Registration successful! Please sign in.",
      };
    } catch (error) {
      console.error("Registration error:", error);
      return {
        success: false,
        message: "An unexpected error occurred during registration.",
      };
    }
  }, []);

  // LOGIN
  const login = useCallback(
    ({ email, password }) => {
      try {
        const users = getLocalStorageArray(USERS_KEY);
        const normalizedEmail = email.trim().toLowerCase();

        const foundUser = users.find(
          (u) =>
            u.email.toLowerCase() === normalizedEmail && u.password === password
        );

        if (!foundUser) {
          return {
            success: false,
            message: "Invalid email or password.",
          };
        }

        // Sanitize auth session (Exclude password and createdAt)
        const sessionUser = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
          phone: foundUser.phone,
        };

        localStorage.setItem(AUTH_KEY, JSON.stringify(sessionUser));
        dispatch(setCredentials(sessionUser));

        return {
          success: true,
          message: `Welcome back, ${sessionUser.name}!`,
        };
      } catch (error) {
        console.error("Login error:", error);
        return {
          success: false,
          message: "An error occurred while logging in.",
        };
      }
    },
    [dispatch]
  );

  // LOGOUT
  const logout = useCallback(() => {
    try {
      localStorage.removeItem(AUTH_KEY);
      dispatch(logoutAction());
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, [dispatch]);

  // RESTORE USER (Safe callback)
  const restoreUser = useCallback(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem(AUTH_KEY));
      if (savedUser && savedUser.email) {
        dispatch(setCredentials(savedUser));
      }
    } catch (error) {
      console.error("Failed to restore user:", error);
      localStorage.removeItem(AUTH_KEY);
    }
  }, [dispatch]);

  return {
    user,
    isAuthenticated,
    register,
    login,
    logout,
    restoreUser,
  };
};


export default useAuth