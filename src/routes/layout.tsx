import { component$, Slot } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";

export default component$(() => {
  return (
    <>
    
      <Header />
      <main>
          <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
        <Slot />
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Webdev.ca",
  meta: [
    // other meta tags here
  ],
  
};

