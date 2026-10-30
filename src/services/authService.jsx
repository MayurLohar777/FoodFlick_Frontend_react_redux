
const AUTH_KEY = "auth_user";
const REGISTER_KEY = "register_user";

// =====================================
// REGISTER
// =====================================

export const saveRegisterUser = (data) => {
  const users =
    JSON.parse(localStorage.getItem(REGISTER_KEY)) || [];

  const emailExist = users.some(
    (user) =>
      user.email.toLowerCase().trim() ===
      data.email.toLowerCase().trim()
  );

  if (emailExist) {
    return false;
  }

  const newUser = {
    id: data.id || Date.now(),
    ...data,
    email: data.email.toLowerCase().trim(),
  };

  const updatedUsers = [
    ...users,
    newUser,
  ];

  localStorage.setItem(
    REGISTER_KEY,
    JSON.stringify(updatedUsers)
  );

  return true;
};


// Get all registered users

export const getRegisterUsers = () => {
  const users = localStorage.getItem(REGISTER_KEY);

  return users ? JSON.parse(users) : [];
};


// Remove all registered users

export const removeRegisterUsers = () => {
  localStorage.removeItem(REGISTER_KEY);
};


// =====================================
// LOGIN
// =====================================

export const saveUser = (user) => {
  localStorage.setItem(
    AUTH_KEY,
    JSON.stringify(user)
  );
};


// Get currently logged-in user

export const getUser = () => {
  const user = localStorage.getItem(AUTH_KEY);

  return user ? JSON.parse(user) : null;
};


// Logout

export const removeUser = () => {
  localStorage.removeItem(AUTH_KEY);
};


// Check authentication

export const isAuthentication = () => {
  return getUser() !== null;
};