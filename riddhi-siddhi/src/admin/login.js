import React, { useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const Login = () => {
  useEffect(() => {
    netlifyIdentity.init(); // Initialize Netlify Identity
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => netlifyIdentity.open()}>Login with Netlify</button>
    </div>
  );
};

export default Login;
