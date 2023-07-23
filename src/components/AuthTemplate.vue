<template>
    <main>
        <div className="flex flex-col lg:flex-row">
            <section className="w-0 min-h-screen lg:w-1/2 lg:block hidden bg-cover bg-center bg-main">
                <div className="fixed w-1/2 bg-cover bg-center bg-main z-10 h-screen"></div>
            </section>
            <section className="lg:w-1/2 bg-main bg-cover bg-center bg-black/70 lg:bg-white lg:bg-none lg:text-black">
                <div className="global-px py-7 lg:px-16 flex justify-start md:justify-center flex-col min-h-screen">
                    <div
                        className="bg-gray-200/90 lg:bg-white backdrop-blur-sm px-5 py-6 lg:p-0 rounded-xl md:min-h-screen">
                        <slot />
                    </div>
                </div>

                <footer className="bg-[#F8F8F8] text-[#4f5665]">
                    <div className="global-px lg:px-16">
                        <div className="py-5  md:py-10"></div>
                        <div className="flex flex-col-reverse gap-12 md:flex-row">
                            <div className="flex flex-col gap-4 md:max-w-[50%]">
                                <router-link to="/">
                                    <div className="font-extrabold flex flex-row gap-2">
                                        <img src="/icon.svg" alt="logo" width="30" />
                                        <h1 className="text-xl text-black">jokopi.</h1>
                                    </div>
                                </router-link>
                                <div className="">
                                    jokopi is a store that sells some good meals, and especially
                                    coffee. We provide high quality beans
                                </div>
                                <div className="flex flex-row gap-5">
                                    <a href="#"
                                        className="bg-tertiary h-[35px] w-[35px] flex items-center justify-center rounded-full"
                                        aria-label="Facebook">
                                        <img src={fbLogo} alt="" />
                                    </a>
                                    <a href="#"
                                        className="bg-tertiary h-[35px] w-[35px] flex items-center justify-center rounded-full"
                                        aria-label="Instagram">
                                        <img src={igLogo} alt="" />
                                    </a>
                                    <a href="#"
                                        className="bg-tertiary h-[35px] w-[35px] flex items-center justify-center rounded-full"
                                        aria-label="Twitter">
                                        <img src={twLogo} alt="" width="120%" className="w-16" />
                                    </a>
                                </div>
                                <div className="copyright">(c) 2023 jokopi</div>
                            </div>
                            <nav className="flex flex-row lg:flex-col gap-10 md:flex-1">
                                <div className="flex-1 flex flex-col gap-5">
                                    <div className="grid-item">
                                        <p className="font-bold">Product</p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2  lg:flex-row lg:gap-x-10 lg:gap-y-4 flex-wrap w-full">
                                        <div className="grid-item flex-1">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                Download
                                            </a>
                                        </div>
                                        <div className="grid-item flex-1">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                Pricing
                                            </a>
                                        </div>
                                        <div className="grid-item flex-1">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                Locations
                                            </a>
                                        </div>
                                        <div className="grid-item flex-1">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                Countries
                                            </a>
                                        </div>
                                        <div className="grid-item flex-1">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                Blog
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <div className="grid-item">
                                        <p className="font-bold">Engage</p>
                                    </div>
                                    <div
                                        className="flex flex-col gap-2  lg:flex-row lg:gap-x-10 lg:gap-y-4 flex-wrap w-full text-base">
                                        <div className="grid-item flex-1 min-w-[5rem]">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                Coffee Shop?
                                            </a>
                                        </div>
                                        <div className="grid-item flex-1 min-w-[5rem]">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                FAQ
                                            </a>
                                        </div>
                                        <div className="grid-item flex-1">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                About Us
                                            </a>
                                        </div>
                                        <div className="grid-item flex-1">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                Privacy Policy
                                            </a>
                                        </div>
                                        <div className="grid-item flex-1">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                Terms of Services
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="py-5"></div>
                    </div>
                </footer>
            </section>
        </div>
    </main>
</template>

<script lang="ts">
export default {

}
</script>
