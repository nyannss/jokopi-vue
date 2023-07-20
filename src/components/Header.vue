<template>
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b-2 border-gray-100">
        <div className=" flex global-px justify-between items-center">
            <div className="py-5 md:py-8 font-extrabold">
                <router-link to="/">
                    <span className=" flex flex-row justify-center gap-4">
                        <img src="../assets/jokopi.svg" alt="logo" width="30" />
                        <h1 className="text-xl">jokopi.</h1>
                    </span>
                </router-link>
            </div>

            <nav className="py-6 hidden lg:flex flex-row gap-8 justify-center">
                <li v-for="nav in navbar" className="list-none" key="Home Page">
                    <RouterLink :to="nav.url" activeClass="font-bold text-[#6A4029]">
                        {{ nav.name }}
                    </RouterLink>
                </li>
            </nav>
            <div className="navbar-burger select-none cursor-pointer lg:hidden py-4 flex gap-7 flex-row items-center">
                <button>
                    <img src="/assets/icons/burger-menu-left.svg" width="30" className="aspect-square" alt="" />
                </button>
            </div>
            <div className="hidden lg:flex flex-row gap-3 items-center select-none py-6">
                <router-link to="/auth/login" className="mr-9 font-semibold">
                    Login
                </router-link>
                <router-link to="/auth/register">
                    <button
                        className="rounded-[25px] bg-secondary px-10 text-tertiary font-semibold py-2 hover:bg-secondary-200 duration-300">
                        Sign Up
                    </button>
                </router-link>
            </div>
        </div>
    </header>
</template>
<script lang="ts">
export default {
    data() {
        return {
            navbar: [
                {
                    name: "Home",
                    url: "/"
                },
                {
                    name: "Products",
                    url: "/products"
                },
                {
                    name: "Your Cart",
                    url: "/cart"
                },
                {
                    name: "History",
                    url: "/product"
                }
            ]
        }
    },
}
</script>