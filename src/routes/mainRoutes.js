import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

export const mainRoutesAuth = [
  {
    name: "SignIn",
    path: "/signin",
    exact: true,
    component: LogInPage,
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "SignUp",
    path: "/signup",
    exact: true,
    component: SignUpPage,
    isPrivate: false,
    isRestricted: true,
  },
];

export const mainRoutesHome = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: HomePage,
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Contacts",
    path: "/contacts",
    exact: true,
    component: ContactsPage,
    isPrivate: true,
    isRestricted: false,
  },
];
