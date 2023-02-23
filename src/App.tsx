import React, { useState } from "react";
import LoginForm from "./LoginForm";
import AuthService from "./AuthService";

function App() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const handleLogin = async (email: string, password: string) => {
    const authService = new AuthService();
    const token = await authService.login(email, password);
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <div>
      {token ? <p>You are logged in!</p> : <LoginForm onSubmit={handleLogin} />}
    </div>
  );
}

export default App;
