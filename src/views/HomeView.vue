<template>
    <main>
        <section class="bg-main bg-cover bg-center py-20 text-white font-bold">
            <div class="global-px">
                <div class="flex flex-col gap-6 w-[75%] lg:w-[50%] text-sm">
                    <h2 class="text-4xl font-bold">
                        Start Your Day with Coofee and Good Meals
                    </h2>
                    <p>
                        We provide high quality beans, good taste, and healthy meals
                        made by love just for you. Start your day with us for a bigger
                        smile!
                    </p>
                    <div class="mt-5">
                        <router-link to="/products/">
                            <span class="bg-secondary px-6 py-4 text-[#6A4029] rounded-xl">
                                Get Started
                            </span>
                        </router-link>
                    </div>
                </div>
                <section class=" relative bg-white mt-20 mb-[-9rem] rounded-xl shadow-xl text-primary-title flex flex-row
                        py-5 justify-center items-center text-center md:text-left">
                    <aside
                        class="flex-1 border-r-2 py-2 md:py-6 flex flex-col md:flex-row justify-center gap-3 md:gap-8 items-center">
                        <div>
                            <div class="bg-secondary rounded-full p-2 w-10 aspect-square flex justify-center items-center">
                                <img src="/assets/icons/user.svg" alt="" />
                            </div>
                        </div>
                        <div>
                            <p class="text-md lg:text-xl">90+</p>
                            <p class="font-normal text-primary">Staff</p>
                        </div>
                    </aside>
                    <aside
                        class="flex-1 border-r-2 py-2 md:py-6 flex flex-col md:flex-row justify-center gap-3 md:gap-8 items-center">
                        <div class="bg-secondary rounded-full p-2 w-10 aspect-square flex justify-center items-center">
                            <img src="/assets/icons/love.svg" alt="" />
                        </div>
                        <div>
                            <p class="text-md lg:text-xl">800+</p>
                            <p class="font-normal text-primary">Customers</p>
                        </div>
                    </aside>
                    <aside class="flex-1 py-2 md:py-6 flex flex-col md:flex-row justify-center gap-3 md:gap-8 items-center">
                        <div class="bg-secondary rounded-full p-2 w-10 aspect-square flex justify-center items-center">
                            <img src=/assets/icons/place.svg alt="" />
                        </div>
                        <div>
                            <p class="text-md lg:text-xl">30+</p>
                            <p class="font-normal text-primary">Stores</p>
                        </div>
                    </aside>
                </section>
            </div>
        </section>
        <section class="flex flex-col lg:flex-row global-px py-20 lg:gap-32 mt-8 md:mt-20">
            <div class="flex-1 img">
                <img src="/assets/images/team-work.webp" alt="" class="w-full" />
            </div>
            <div class="flex-1 flex flex-col justify-center gap-5">
                <h2 class="text-primary-title font-semibold text-[35px]">
                    We Provide Good Coffee and Healthy Meals
                </h2>
                <p class="text-[#4F5665]">
                    You can explore the menu that we provide with fun and have their
                    own taste and make your day better.
                </p>
                <ul class="flex flex-col max-w-md space-y-1 text-[#4F5665] list-inside gap-4">
                    <li v-for="provide in provides" class="flex items-center gap-4" key={idx}>
                        <img src="/assets/icons/check-circle.svg" alt="" />{{ provide }}
                    </li>
                </ul>
            </div>
        </section>
        <section class="global-px py-8 md:py-20">
            <div class="flex flex-col items-center">
                <h2 class="text-4xl text-primary-title font-semibold mb-5 text-center">
                    Here is People’s Favorite
                </h2>
                <p class="text-base text-gray-700 text-center">
                    Let’s choose and have a bit taste of poeple’s favorite. It might
                    be yours too!
                </p>
            </div>
            <div class="flex flex-row flex-wrap justify-center gap-12 mt-20">
                <div v-for="i in 3"
                    class="flex-1 flex flex-col justify-center border-gray-400 border rounded-xl px-5 py-5 md:py-12 items-center gap-5 text-base">
                    <img src="https://res.cloudinary.com/dlncs1ord/image/upload/v1679362126/jokopi-assets/2_akolkt.webp"
                        alt="" width="140" class="rounded-full mb-7" :key="i" />
                    <h3 class="text-lg font-medium">Hazelnut Latte</h3>
                    <ul class="flex flex-col gap-5 mb-8 md:mb-20">
                        <li class="flex items-center gap-4">
                            <img src="/assets/icons/check-circle.svg" alt="" /> Hazelnut Syrup
                        </li>
                        <li class="flex items-center gap-4">
                            <img src="/assets/icons/check-circle.svg" alt="" /> Wanilla Whipped Cream
                        </li>
                        <li class="flex items-center gap-4">
                            <img src="/assets/icons/check-circle.svg" alt="" /> Ice / Hot
                        </li>
                        <li class="flex items-center gap-4">
                            <img src="/assets/icons/check-circle.svg" alt="" /> Sliced Banana on Top
                        </li>
                    </ul>
                    <p class="font-medium text-2xl">IDR 25.000</p>
                    <button class="bg-secondary text-tertiary px-9 py-3 rounded-3xl font-bold">
                        Order Now
                    </button>
                </div>

            </div>
        </section>
        <section class="global-px py-8 md:py-20">
            <div class="flex flex-col items-center mb-8 md:mb-20">
                <h2 class="text-4xl text-primary-title font-semibold mb-5 text-center">
                    Visit Our Store in
                    <br />
                    the Spot on the Map Below
                </h2>
                <p class="text-base text-gray-700 text-center">
                    See our store in every city on the spot and spen your good day
                    there. See you soon!
                </p>
            </div>
            <div class="mt-10">
                <img src="/assets/images/global.svg" alt="global map" />
            </div>
        </section>
        <section class="global-px py-8 md:py-20">
            <div class="flex flex-col items-center mb-8 md:mb-20">
                <h2 class="text-4xl text-primary-title font-semibold mb-5 text-center">
                    Our Partner
                </h2>
            </div>
            <div class="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-12 ">
                <img v-for="{ name, img } in partners" :src="img" :title="name" alt="" width="100"
                    class="lg:w-[15%] aspect-[3/2] object-contain grayscale opacity-40 duration-300 hover:filter-none hover:opacity-100" />
            </div>
        </section>
        <section class="global-px py-8 md:py-20">
            <div class="flex flex-col items-center mb-8 md:mb-20 text-center">
                <h2 class="text-3xl md:text-[35px] text-primary-title font-semibold mb-5">
                    Loved by Customer of
                    <br /> Happy Customer
                </h2>
                <p class="text-[1rem] text-center max-w-[555px] text-primary">
                    These are the stories of our customers who have visited us with
                    great pleasure.
                </p>
            </div>
            <div class="overflow-auto flex flex-row gap-5 flex-wrap lg:flex-nowrap ">
                <div v-for="{ name, text } in reviews"
                    class="w-[400px] border-gray-300 hover:border-tertiary border-2 duration-200 rounded-xl p-7 space-y-4 hover:shadow-2xl mx-auto"
                    key={idx}>
                    <div class="flex flex-row gap-2 items-center">
                        <img src="/assets/images/placeholder-profile.jpg" alt=""
                            class="w-14 aspect-square object-cover rounded-full" />
                        <div class="flex-1">
                            <p class="font-semibold text-primary-title text-lg">
                                {{ name }}
                            </p>
                            <p class="text-primary text-sm">Warsaw, Poland</p>
                        </div>
                        <div class="flex flex-row items-center gap-2">
                            4.5 <img src="/assets/icons/star.svg" alt="" />
                        </div>
                    </div>
                    <p class="text-primary-title">“{{ text }}</p>
                </div>
            </div>
        </section>
        <section class="global-px z-10 relative w-full mb-6 md:mb-[-6rem]">
            <div
                class="shadow-primary rounded-xl flex flex-col md:flex-row py-10 md:py-14 px-8 md:px-16 bg-white text-center md:text-left">
                <aside class="flex-1 space-y-4 mb-5 md:mb-0">
                    <p class="text-3xl font-semibold">Check our promo today!</p>
                    <p class="text-primary">
                        Let&apos;s see the deals and pick yours
                    </p>
                </aside>
                <aside class="hidden lg:block lg:flex-1"></aside>
                <aside class="flex-1 flex flex-col justify-center">
                    <button class="ml-auto w-[100%] md:w-[75%]  bg-secondary rounded-xl py-4 text-tertiary font-bold">
                        See promo
                    </button>
                </aside>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
export default {
    data() {
        return {
            provides: [
                "High quality beans",
                "Healthy meals, you can request the ingredients",
                "Chat with our staff to get better experience for ordering",
                "Free member card with a minimum purchase of IDR 200.000."
            ],
            partners: [
                {
                    name: "Netflix",
                    img: "/assets/images/partners/netflix.svg"
                },
                {
                    name: "Reddit",
                    img: "/assets/images/partners/reddit.svg"
                },
                {
                    name: "Amazon",
                    img: "/assets/images/partners/amazon.svg"
                },
                {
                    name: "Discord",
                    img: "/assets/images/partners/discord.svg"
                },
                {
                    name: "Spotify",
                    img: "/assets/images/partners/spotify.svg"
                },
            ],
            reviews: [
                {
                    name: "Foo Barr",
                    text: "Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!",
                },
                {
                    name: "Yessica Christy",
                    text: "I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte",
                },
                {
                    name: "Kim Young Jou",
                    text: "This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town",
                },
            ],
        }
    },
}
</script>
