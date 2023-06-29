import CardVite from "./assets/components/CardVite";

export default function App() {
  return (
    <>
      <section className="top-seccion">
        <div className="container">
          <div className="text-top">
            <h1 className="prime-title"> Vite </h1>
            <h1 className="second-title"> Next Generation Frontend Tooling </h1>
            <h3 className="sub-title">
              Get ready a development environment that can finally catch up with
              you.
            </h3>
            <div className="box-buttons">
              <button id="blue-button">Get Started</button>
              <button>Why Vite?</button>
              <button>View on Github</button>
            </div>
          </div>
          <div className="logo">
            <div id="circle"></div>
            <img
              className="img"
              src="https://vitejs.dev/logo-with-shadow.png"
              alt="vite-logo"
            ></img>
          </div>
        </div>
      </section>
      <section className="bottom-seccion">
        <div className="cards-container">
          <CardVite
            iconCard="💡"
            titleCard="Instant Server Start"
            textCard="On demand file serving over native ESM, no bundling required!"
          />
          <CardVite
            iconCard="⚡"
            titleCard="Lightning Fast HMR"
            textCard="Hot Module Replacement (HMR) that stays fast regardless of app size."
          />
          <CardVite
            iconCard="🛠️"
            titleCard="Rich Features"
            textCard="Out-of-the-box support for TypeScript, JSX, CSS and more."
          />
          <CardVite
            iconCard="📦"
            titleCard="Optimized Build"
            textCard="Pre-configured Rollup build with multi-page and library mode support."
          />
          <CardVite
            iconCard="🔩"
            titleCard="Universal Plugins"
            textCard="Rollup-superset plugin interface shared between dev and build."
          />
          <CardVite
            iconCard="🔑"
            titleCard="Fully Typed APIs"
            textCard="Flexible programmatic APIs with full TypeScript typing."
          />
        </div>
      </section>
    </>
  );
}
