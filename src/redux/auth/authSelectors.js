// const getIsSignedIn = (state) => state.auth.isSignedIn;
const getUserName = (state) => state.auth.user.name;
export const isLogged = (state) => state.auth.isLoggedIn;
export const tokenSelector = (state) => state.auth.token

// const authSelectors = {
//   getIsSignedIn,
//   getUserName,
// };

// export default authSelectors;
