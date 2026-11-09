import Biryani from "../images/biryani.jpg";
import HilshaFishCurry from "../images/hilsha-fish-curry.jpg";
import shorsheChingri from "../images/shorshe-chingri.jpg";

export default () => {
  const menuContainer = document.createElement("main");
  menuContainer.classList.add("mx-auto", "max-w-6xl", "px-6", "py-16");

  menuContainer.innerHTML = `      <section class="">
          <div class="mb-10 flex items-end justify-between gap-4">
            <div>
              <p
                class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700"
              >
                Popular picks
              </p>
              <h2 class="mt-2 text-3xl font-black text-stone-900">
                Chef's signature dishes
              </h2>
            </div>
          </div>

          <div class="grid gap-8 md:grid-cols-3">
            <article
              class="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-lg shadow-stone-200/60"
            >
              <img
                src=${Biryani}
                alt="Biryani"
                class="h-64 w-full object-cover"
              />
              <div class="p-6">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-xl font-bold text-stone-900">
                    Dhaka Chicken Biryani
                  </h3>
                  <span class="text-lg font-bold text-amber-700">$18</span>
                </div>
                <p class="mt-3 text-sm leading-6 text-slate-600">
                  Fragrant basmati rice layered with tender chicken, saffron,
                  and a royal blend of Bengali spices.
                </p>
              </div>
            </article>

            <article
              class="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-lg shadow-stone-200/60"
            >
              <img
                src=${HilshaFishCurry}
                alt="Fish curry"
                class="h-64 w-full object-cover"
              />
              <div class="p-6">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-xl font-bold text-stone-900">
                    Hilsha Fish Curry
                  </h3>
                  <span class="text-lg font-bold text-amber-700">$22</span>
                </div>
                <p class="mt-3 text-sm leading-6 text-slate-600">
                  Rich mustard gravy with freshwater hilsha, green chilies, and
                  a delicate balance of bold Bengali flavors.
                </p>
              </div>
            </article>

            <article
              class="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-lg shadow-stone-200/60"
            >
              <img
                src=${shorsheChingri}
                alt="Vegetarian Bengali platter"
                class="h-64 w-full object-cover"
              />
              <div class="p-6">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-xl font-bold text-stone-900">
                    Shorshe Chingri
                  </h3>
                  <span class="text-lg font-bold text-amber-700">$20</span>
                </div>
                <p class="mt-3 text-sm leading-6 text-slate-600">
                  Juicy prawns simmered in a mustard and coconut gravy, finished
                  with fresh herbs and a touch of lime.
                </p>
              </div>
            </article>
          </div>
        </section>`;

  return menuContainer;
};
