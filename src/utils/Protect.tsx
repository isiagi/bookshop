import { Navigate } from "react-router-dom";

type Props = {
    isLoggedIn: boolean;
    children: React.ReactNode
};

function Protect({ isLoggedIn, children }: Props) {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default Protect;
