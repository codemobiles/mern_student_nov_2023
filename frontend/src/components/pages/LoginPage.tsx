import React, { useState } from "react";
import cmLogo from "@/assets/images/react_js_logo.jpg";
import { Button, TextField } from "@mui/material";

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(JSON.stringify(user));
        }}
      >
        {/* Username */}
        {/* <label htmlFor="name">Username: </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <br /> */}
        <TextField
          label="Username"
          variant="outlined"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <br />

        {/* Password */}
        <TextField
          sx={{ mt: 3, mb: 3 }}
          label="Password"
          variant="outlined"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <br />

        <Button variant="contained" type="submit">
          Submit
        </Button>
        <Button
          sx={{ ml: 1 }}
          variant="outlined"
          type="button"
          onClick={() => {
            setUser({ username: "", password: "" });
          }}
        >
          Reset
        </Button>
      </form>
    </div>
  );
}
