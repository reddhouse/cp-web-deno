import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="stylesheet" href="stylesheet.css" />
      </Head>
      <div class="about">
        <h1>About</h1>
        <p>When life gives you lemons...</p>
        <div class="about__image-container">
          <img
            class="about__lemon-svg"
            src="/logo.svg"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </div>
        <p>A counter, on an island...</p>
        <Counter start={3} />
      </div>
    </>
  );
}
