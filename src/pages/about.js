import RestaurantInterrior from "../images/restaurant-interior.jpg";

export default () => {
  const aboutContainer = document.createElement("main");

  aboutContainer.innerHTML = `<section class="bg-stone-200/60 py-16">
          <div class="mx-auto max-w-6xl px-6">
            <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div
                class="overflow-hidden rounded-4xl shadow-xl shadow-stone-300/50"
              >
                <img
                  src=${RestaurantInterrior}
                  alt="Restaurant interior"
                  class="h-full min-h-105 w-full object-cover"
                />
              </div>

              <div>
                <p
                  class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700"
                >
                  About us
                </p>
                <h2 class="mt-3 text-3xl font-black text-stone-900">
                  A dining experience inspired by Bengal’s soul.
                </h2>
                <p class="mt-5 text-lg leading-8 text-slate-600">
                  Our kitchen celebrates the diversity of Bengali cuisine,
                  blending earthy spices, seasonal ingredients, and chef-driven
                  techniques to create memorable meals for every gathering.
                </p>

                <div class="mt-8 grid gap-5 sm:grid-cols-2">
                  <div class="rounded-2xl border border-stone-200 bg-white p-5">
                    <p class="text-2xl font-black text-stone-900">100%</p>
                    <p class="mt-2 text-sm text-slate-600">
                      Authentic taste profiles
                    </p>
                  </div>
                  <div class="rounded-2xl border border-stone-200 bg-white p-5">
                    <p class="text-2xl font-black text-stone-900">Daily</p>
                    <p class="mt-2 text-sm text-slate-600">
                      Freshly prepared specials
                    </p>
                  </div>
                  <div class="rounded-2xl border border-stone-200 bg-white p-5">
                    <p class="text-2xl font-black text-stone-900">Family</p>
                    <p class="mt-2 text-sm text-slate-600">
                      Comfortable, welcoming space
                    </p>
                  </div>
                  <div class="rounded-2xl border border-stone-200 bg-white p-5">
                    <p class="text-2xl font-black text-stone-900">7 days</p>
                    <p class="mt-2 text-sm text-slate-600">
                      Open for lunch & dinner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mx-auto max-w-6xl px-6 py-16">
          <div class="rounded-4xl bg-[#2f1b12] px-6 py-10 text-white md:px-10">
            <div
              class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <p
                  class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200"
                >
                  Book a table
                </p>
                <h2 class="mt-3 text-3xl font-black">
                  Gather with family, celebrate with flavor.
                </h2>
              </div>

              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-stone-900 transition hover:bg-amber-200"
              >
                Reserve Now
              </button>
            </div>
          </div>
        </section>`;

  return aboutContainer;
};
