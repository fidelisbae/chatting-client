import React from "react";

interface LoginProps {
  email: string;
  password: string;
}

export class Login extends React.Component {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount(): void {
    this.setState({});
  }

  // backend login api: "http://localhost:4000/api/auth/login"
  login = async (email: string, password: string) => {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
  };

  render() {
    // login with email and password
    return (
      <div>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>
          <a href="/home">Login</a>
        </button>
      </div>
    );
  }
}
