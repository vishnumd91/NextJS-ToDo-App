import { ReactElement } from "react";
import "./globals.css";
import Link from "next/link";

const Home = (): ReactElement => {
  return (
    <div>
      <h1>Login Page will come soon! Go to /todo route as of now</h1>
      <Link href="/todo">Go to Todo Page</Link>
    </div>
  );
};

export default Home;
