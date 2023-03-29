import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="stylesheet.css" />
      </Head>
      <div class="home">
        <div class="home__fr-1">
          <div class="home__fc-tagline">
            <h1 class="home__tagline">
              Take control of
              <br />
              <span class="home__tagline--colored">your government</span>.
              <br />
              Decide the future
              <br />
              of <span class="home__tagline--colored">our nation</span>.
            </h1>
            <div class="home__sub-tagline">
              Join the first cooperatively-owned, collectively-managed political
              party.
            </div>
          </div>
          <div class="home__fc-image">
            <img
              class="home__lemon-svg"
              src="/logo.svg"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
          </div>
        </div>
        <p class="home__welcome-text">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
