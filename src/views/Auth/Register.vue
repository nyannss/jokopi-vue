<template>
    <auth-template>
        <header className="flex justify-between mb-10">
            <router-link to="/">
                <div className="font-extrabold flex flex-row justify-center gap-4">
                    <img src="/icon.svg" alt="logo" width="30" />
                    <h1 className="text-xl">jokopi.</h1>
                </div>
            </router-link>
            <div className="text-md md:text-lg font-semibold text-tertiary">
                Sign Up
            </div>
        </header>
        <section className="mt-16">
            <form className="space-y-3 md:space-y-4 relative">
                <div>
                    <label name="email" htmlFor="email" className="text-[#4F5665] font-bold">
                        Email address :
                    </label>
                    <input type="text" name="email" id="email"
                        className="border-gray-400 border-2 rounded-2xl p-3 w-full mt-2" placeholder="Enter your email" />
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 h-4">
                        <!-- {error.email != "" ? error.email : ""} -->
                    </span>
                </div>
                <div>
                    <label name="password" htmlFor="password" className="text-[#4F5665] font-bold">
                        Password :
                    </label>
                    <input type="password" name="password" id="password"
                        className="border-gray-400 border-2 rounded-2xl p-3 w-full mt-2"
                        placeholder="Enter your password" />
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 h-4">
                        <!-- {error.password != "" ? error.password : ""} -->
                    </span>
                </div>
                <div>
                    <label name="phoneNumber" htmlFor="phoneNumber" className="text-[#4F5665] font-bold">
                        Phone Number :
                    </label>
                    <input type="text" name="phoneNumber" id="phoneNumber"
                        className="border-gray-400 border-2 rounded-2xl p-3 w-full mt-2"
                        placeholder="Enter your phone number" />
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 h-4">
                        <!-- {error.phoneNumber != "" ? error.phoneNumber : ""} -->
                    </span>
                </div>

                <button type="submit"
                    className="bg-primary w-full text-white focus:ring-1 focus:outline-none focus:ring-primary-300 font-bold rounded-2xl text-base md:text-lg p-3 text-center shadow-xl inline-flex items-center justify-center transition ease-in-out duration-150 hover:bg-secondary-200">
                    Sign Up
                </button>
                <button type="submit"
                    className="bg-white w-full text-tertiary focus:ring-1 focus:outline-none focus:ring-primary-300 font-bold rounded-2xl text-base md:text-lg p-3 text-center  shadow-xl inline-flex justify-center items-center border-gray-200">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" width="23"
                        className="w-5 h-5 mr-2" />
                    <span>Login with Google</span>
                </button>
            </form>
        </section>
    </auth-template>
</template>

<script lang="ts">
import AuthTemplate from '@/components/AuthTemplate.vue';

export default {
    components: { AuthTemplate }
}

</script>
