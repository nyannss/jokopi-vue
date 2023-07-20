<template>
    <footer className="bg-[#F8F8F8] text-[#4f5665]">
        <div className="global-px">
            <div className="py-5  md:py-20"></div>
            <div className="flex flex-col-reverse gap-12 md:gap-0 md:flex-row">
                <div className="flex flex-col gap-4 md:flex-[2_2_0%]">
                    <router-link to="/">
                        <div className="font-extrabold flex flex-row gap-2">
                            <img src="/icon.svg" alt="logo" width="30" />
                            <h1 className="text-xl text-black">jokopi.</h1>
                        </div>
                    </router-link>
                    <div className="md:w-96">
                        jokopi is a store that sells some good meals, and especially
                        coffee. We provide high quality beans
                    </div>
                    <div className="flex flex-row gap-5">
                        <a href="#" className="bg-primary h-[35px] w-[35px] flex items-center justify-center rounded-full">
                            <img src="/assets/icons/facebook.svg" alt="" />
                        </a>
                        <a href="#" className="bg-primary h-[35px] w-[35px] flex items-center justify-center rounded-full">
                            <img src="/assets/icons/twitter.svg" alt="" />
                        </a>
                        <a href="#" className="bg-primary h-[35px] w-[35px] flex items-center justify-center rounded-full">
                            <img src="/assets/icons/instagram.svg" alt="" />
                        </a>
                    </div>
                    <div className="copyright">(c) 2023 jokopi</div>
                </div>
                <nav className="flex flex-row gap-10 md:flex-1">
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="grid-item">
                            <h4 className="font-bold">Product</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div v-for="{ title, url } in links.section1" className="grid-item">
                                <a :href="url" target="_blank" rel="noopener noreferrer">
                                    {{ title }}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="grid-item">
                            <h4 className="font-bold">Engage</h4>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div v-for="{ title, url } in links.section2" className="grid-item">
                                <a :href="url" target="_blank" rel="noopener noreferrer">
                                    {{ title }}
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="py-5"></div>
        </div>
    </footer>
</template>

<script lang="ts">
export default {
    data() {
        return {
            links: {
                section1: [
                    { title: "Download", "url": "#" },
                    { title: "Pricing", "url": "#" },
                    { title: "Locations", "url": "#" },
                    { title: "Countries", "url": "#" },
                    { title: "Blog", "url": "#" },
                ],
                section2: [
                    { title: "Coffee Shop", "url": "#" },
                    { title: "FAQ", "url": "#" },
                    { title: "About Us", "url": "#" },
                    { title: "Privacy Policy", "url": "#" },
                    { title: "Terms of Services", "url": "#" },
                ]
            }
        }
    }
}
</script>