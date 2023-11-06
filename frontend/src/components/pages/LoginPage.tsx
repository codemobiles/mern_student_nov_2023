import React, { useState } from "react";
import cmLogo from "@/assets/images/react_js_logo.jpg";

type Props = {};

interface User {
  username: string;
  password: string;
}

export default function LoginPage({}: Props) {
  const [user, setUser] = useState<User>({
    username: "lek",
    password: "1234",
  });

  return (
    <div>
      <form>
        {/* Username */}
        <label htmlFor="name">Username: </label>
        <input type="text" name="username" value={user.username} />
        <br />

        {/* Password */}
        <label htmlFor="name">Password: </label>
        <input type="text" name="password" value={user.password} />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}
