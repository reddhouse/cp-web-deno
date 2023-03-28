import { Head } from "$fresh/runtime.ts";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h1>About</h1>
        <p style={titleStyle}>This is the about page.</p>
      </main>
    </>
  );
}

const titleStyle = `
  color: #035435;
`;
