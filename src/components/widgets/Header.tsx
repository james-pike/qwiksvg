import { component$, useStore } from "@builder.io/qwik";


import Logo from "~/components/common/Logo";
import ToggleTheme from "~/components/common/ToggleTheme";
import ToggleMenu from "~/components/common/ToggleMenu";
import TogglePalette from "../common/TogglePalette";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

 

  return (
    <header
    id="header"
    class={`sticky top-0 z-40 flex-none border-b border-gray-50/0 transition-all ease-in-out duration-300 ${
      store.isScrolling
        ? "w-full md:bg-white/90 py-1 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-white dark:bg-slate-900 md:mx-0 md:rounded-none md:shadow-none"
        : "w-[93%] mx-aut0 py-2 rounded-lg shadow-md mt-4"
    }`}
    window:onScroll$={() => {
      if (!store.isScrolling && window.scrollY >= 10) {
        store.isScrolling = true;
      } else if (store.isScrolling && window.scrollY < 10) {
        store.isScrolling = false;
      }
    }}
  >
    <div class="absolute inset-0 md:rounded-none rounded-lg overflow-hidden"></div>
  
    <div class="relative text-default py-1 px-3 md:px-6 w-full md:flex md:justify-between max-w-7xl mx-auto">
      <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
        <a class="flex items-center" href={"/"}>
          <Logo />
        </a>
        <div class="flex items-center md:hidden">
          <TogglePalette iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
          <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
          <ToggleMenu />
        </div>
      </div>
      <nav class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5" aria-label="Main navigation">
        {/* Menu items go here */}
      </nav>
      <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
        <div class="items-center flex justify-between w-full md:w-auto">
          <div class="flex">
            <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
          </div>
          <span class="ml-4 rtl:ml-0 rtl:mr-4">
            <a href="https://github.com/onwidget/qwind" class="btn btn-primary ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto">
              Download
            </a>
          </span>
        </div>
      </div>
    </div>
  </header>
  

  );
});
