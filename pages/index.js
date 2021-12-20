import { useEffect } from "react";
import Layout from "../components/Layout";

export default function IndexPage() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);

  return (
    <Layout title={"Home"}>
      <div>
        <p>Hello Wilder !</p>
      </div>
    </Layout>
  );
}
