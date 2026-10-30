// import { createSlice } from "@reduxjs/toolkit";


// const getInitialAuth = () => {
//   try {
//     const authUser = JSON.parse(localStorage.getItem("auth_user"));
//     if (authUser && authUser.id && authUser.email) {
//       return {
//         user: authUser,
//         isAuthenticated: true,
//       };
//     }
//   } catch (error) {
//     console.error("Failed to parse auth_user from localStorage:", error);
//     localStorage.removeItem("auth_user");
//   }

//   return {
//     user: null,
//     isAuthenticated: false,
//   };
// };

// const authSlice = createSlice({
//     name :'login',
//     initialState : getInitialAuth(),
//     reducers : {
//         addUser : (state, action) => {
//             state.user = action.payload;
//             state.isAuthenticated = true;
//         },

//         logOut : (state) => {
//             state.user = null;
//             state.isAuthenticated = false;
//         }


//     }
// });
// export const { addUser, logOut } = authSlice.actions;
// export default authSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const getInitialAuth = () => {
  try {
    const authUser = JSON.parse(localStorage.getItem("auth_user"));
    if (authUser && authUser.email) {
      return {
        user: authUser,
        isAuthenticated: true,
      };
    }
  } catch (error) {
    console.error("Failed to parse auth_user from localStorage:", error);
    localStorage.removeItem("auth_user");
  }

  return {
    user: null,
    isAuthenticated: false,
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialAuth(),
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
