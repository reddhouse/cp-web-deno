import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="stylesheet.css" />
      </Head>
      <div class="header">
        Home&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;Contact
      </div>
      <div class="home">
        <div class="home__tagline">Politics without politicians</div>
        <div class="home__tagline">Elections without campaigns</div>
        <div class="home__tagline">
          <span class="home__tagline--emphasized">
            Government under your control
          </span>
        </div>
        <div class="home__sub-tagline">
          Join the first cooperatively owned & managed political party, built
          from the ground up to advance popular initiatives, and dismantle
          failing institutions.
          <div class="home__sign-up">
            <input />
            <span>
              <button>Sign Up</button>
            </span>
          </div>
        </div>

        <div class="home__blurb">
          <div class="home__blurb-heading">
            <span>The problem with Republi-crats</span>
          </div>
          <div class="home__blurb-details">
            Despite their advertised differences, America's two dominant
            political parties work in remarkable unison to protect the interests
            of their biggest donors. As a result, laws and reforms that would
            deliver the greatest benefits for greatest number of Americans, are
            routinely blocked or buried.
          </div>
        </div>

        <div class="home__blurb">
          <div class="home__blurb-heading">
            <span>Corruption-proof by default.</span>
          </div>
          <div class="home__blurb-details">
            The Cooperative Party eliminates the influence of money in politics
            by sending a different type of representative to congress. Our
            representatives don’t have personal agendas, or careers to build in
            politics. They simply follow a script, written by Cooperative Party
            members. No campaigning, no fundraising, no deal-making.
          </div>
        </div>

        <div class="home__blurb">
          <div class="home__blurb-heading">
            <span>Cooperative by design.</span>
          </div>
          <div class="home__blurb-details">
            Rather than recruiting like-minded people to rally behind various
            causes, we start with members from different walks of life, identify
            the problems they share, and the solutions they find agreeable. The
            Cooperative Party is also cooperatively managed. Members define
            priorities, control finances, and can ultimately pull the plug on
            this entire experiment, if and when they see fit.
          </div>
        </div>
      </div>
    </>
  );
}
