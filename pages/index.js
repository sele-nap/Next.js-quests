import { useEffect } from "react";
import Layout from "../components/Layout";

export default function IndexPage() {
  useEffect(() => {
    console.log("a beautiful index page");
  }, []);

  return (
    <Layout title={"Home"}>
      <div>
        <p>Hello Wilder !</p>
      </div>
    </Layout>
  );
}
