import { Drawer } from "expo-router/drawer";
import Brand from "../components/shared/Brand/Brand";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: <Brand />,
        }}
      />
      <Drawer.Screen
        name="login"
        options={{
          drawerLabel: "Login",
          title: "Login",
        }}
      />
      <Drawer.Screen
        name="register"
        options={{
          drawerLabel: "Register",
          title: "Register",
        }}
      />
    </Drawer>
  );
}
