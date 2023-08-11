import { Head } from "$fresh/runtime.ts";

export default function Hero() {
  return (
    <>
      <div class="hero__tag-flex-row">
        <div class="hero__tag-column">
          <div class="hero__tag-container">
            <div class="hero__tag-text-top">Politics</div>
            <div class="hero__tag-text-bottom">without politicians</div>
          </div>
          <div class="hero__tag-container">
            <div class="hero__tag-text-top">Elections</div>
            <div class="hero__tag-text-bottom">without campaigns</div>
          </div>
          <div class="hero__tag-container">
            <div class="hero__tag-text-top">Government</div>
            <div class="hero__tag-text-bottom">under your control</div>
          </div>
        </div>

        <div class="hero__action-column">
          <div class="hero__action-container">
            <div>
              Join the first cooperatively-owned political party, built from the
              ground up to advance popular initiatives, and dismantle failing
              institutions.
            </div>
            <div class="hero__sign-up">
              <input />
              <span>
                <button>Sign Up</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
