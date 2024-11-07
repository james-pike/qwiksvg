import { component$, Slot } from "@builder.io/qwik";

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
