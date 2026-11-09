import BengaliThali from "../images/bengali-thali.jpg";

export default () => {
  const homeContainer = document.createElement("main");
  homeContainer.classList.add("bg-stone-100", "text-slate-800");

  homeContainer.innerHTML = `<section class="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <div class="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p
                class="mb-4 inline-flex items-center rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900"
              >
                Fresh • Traditional • Family Recipe
              </p>
              <h1
                class="max-w-xl text-4xl font-black leading-tight text-stone-900 sm:text-5xl lg:text-6xl"
              >
                Slow-cooked Bengali flavors in every bite.
              </h1>
              <p class="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                From fragrant biryanis to decadent fish curries, we bring the
                warmth of Bengal to your table with authentic ingredients and
                time-honored cooking.
              </p>

              <div class="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  class="rounded-full bg-[#2f1b12] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4a2f20]"
                >
                  Reserve a Table
                </button>
                <button
                  type="button"
                  class="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100"
                >
                  View Menu
                </button>
              </div>

              <div class="mt-10 flex flex-wrap gap-8 text-sm text-slate-600">
                <div>
                  <p class="text-2xl font-black text-stone-900">20+</p>
                  <p>Signature dishes</p>
                </div>
                <div>
                  <p class="text-2xl font-black text-stone-900">15 yrs</p>
                  <p>Kitchen tradition</p>
                </div>
                <div>
                  <p class="text-2xl font-black text-stone-900">4.9/5</p>
                  <p>Guest rating</p>
                </div>
              </div>
            </div>

            <div class="relative">
              <div
                class="absolute -left-6 top-10 h-28 w-28 rounded-full bg-amber-200 blur-3xl"
              ></div>
              <div
                class="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-orange-200 blur-3xl"
              ></div>

              <div
                class="relative overflow-hidden rounded-4xl border border-stone-200 bg-white p-3 shadow-2xl shadow-stone-300/40"
              >
                <img
                  src=${BengaliThali}
                  alt="Bengali feast spread"
                  class="h-135 w-full rounded-3xl object-cover"
                />
                <div
                  class="absolute bottom-8 left-8 right-8 rounded-2xl bg-stone-900/75 p-4 text-white backdrop-blur-sm"
                >
                  <div class="flex items-center justify-between gap-4">
                    <div>
                      <p
                        class="text-xs uppercase tracking-[0.2em] text-amber-200"
                      >
                        Chef's special
                      </p>
                      <p class="mt-1 text-xl font-semibold">Bengali Thali</p>
                    </div>
                    <span
                      class="rounded-full bg-amber-300 px-3 py-1 text-sm font-bold text-stone-900"
                    >
                      $24
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-[#2f1b12] py-10 text-white">
          <div class="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p class="text-sm uppercase tracking-[0.2em] text-amber-200">
                Fresh ingredients
              </p>
              <p class="mt-3 text-lg font-semibold">
                Locally sourced & handpicked
              </p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p class="text-sm uppercase tracking-[0.2em] text-amber-200">
                Slow-cooked
              </p>
              <p class="mt-3 text-lg font-semibold">
                Traditional recipes, perfected
              </p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p class="text-sm uppercase tracking-[0.2em] text-amber-200">
                Family warmth
              </p>
              <p class="mt-3 text-lg font-semibold">
                Comforting hospitality every day
              </p>
            </div>
          </div>
        </section>`;

  return homeContainer;
};
