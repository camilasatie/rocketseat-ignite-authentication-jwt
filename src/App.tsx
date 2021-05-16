import { AuthProvider } from "./contexts/AuthContent";
import { Login } from "./components/Login";

export default function App() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}
