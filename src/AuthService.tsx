import axios from "axios";

interface LoginResponse {
  result: boolean;
  data: {
    access_token: string;
  };
}

class AuthService {
  async login(email: string, password: string): Promise<string> {
    const response = await axios.post<LoginResponse>(
      "http://localhost:4000/api/auth/login",
      { email, password }
    );
    console.log(response);
    const { access_token } = response.data.data;
    return access_token;
  }
}

export default AuthService;
