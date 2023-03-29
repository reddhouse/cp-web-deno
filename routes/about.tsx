import { Head } from "$fresh/runtime.ts";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="stylesheet" href="stylesheet.css" />
      </Head>
      <div class="about">
        <h1>About</h1>
        <p class="about__title-text">This is the about page.</p>
      </div>
    </>
  );
}
