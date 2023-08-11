import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cooperative Party</title>
        <link rel="stylesheet" href="stylesheet.css" />
        <link rel="stylesheet" href="stylesheet-hero.css" />
      </Head>
      <div class="header">
        Home&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;Contact
        <hr />
      </div>
      <div class="home">
        <Hero />
        <div class="home__spacer"></div>
        <div class="home__blurb">
          <div class="home__blurb-heading">
            <span class="home__blurb-heading--bold">
              Democrat vs Republican is a false choice.
            </span>
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
            <span>We are </span>
            <span class="home__blurb-heading--bold">
              Corruption-proof by default.
            </span>
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
            <span>We are </span>
            <span class="home__blurb-heading--bold">
              Cooperative by design.
            </span>
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
