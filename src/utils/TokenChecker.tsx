// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useState, useEffect } from "react";

function TokenChecker({ key }) {
  const [token, setToken] = useState(localStorage.getItem(key));

  useEffect(() => {
    const storageChange = (event) => {
      console.log(event);

      if (event.key === key) {
        const newToken = event.newValue;
        if (newToken !== token) {
          setToken(newToken);
        }
      }
    };

    window.addEventListener("storage", storageChange);

    return () => {
      window.removeEventListener("storage", storageChange);
    };
  }, [key, token]);

  return Boolean(token);
}

export default TokenChecker;
