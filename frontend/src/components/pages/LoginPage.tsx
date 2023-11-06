import React from "react";
import cmLogo from "@/assets/images/react_js_logo.jpg";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div>
      <form>
        {/* Username */}
        <label htmlFor="name">Username: </label>
        <input type="text" name="username" />
        <br />

        {/* Password */}
        <label htmlFor="name">Password: </label>
        <input type="text" name="password" />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}
