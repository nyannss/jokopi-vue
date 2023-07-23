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
                Login
            </div>
        </header>
        <section className="mt-16">
            <form className="space-y-3 md:space-y-4 relative">
                <div>
                    <label name="email" htmlFor="email" className="text-[#4F5665] font-bold">
                        Email address :
                    </label>
                    <input type="text" class="border-gray-400 border-2 rounded-2xl p-3 w-full mt-2" name="email" id="email"
                        placeholder="Enter your email address" />
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 h-4">

                    </span>
                </div>
                <div>
                    <label name="password" htmlFor="password" className="text-[#4F5665] font-bold">
                        Password :
                    </label>
                    <input type="password" name="password" id="password"
                        class="border-gray-400 border-2 rounded-2xl p-3 w-full mt-2" placeholder="Enter your password"
                        value="" />
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 h-4">
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="rememberMe" name="rememberMe" type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <Link to="/auth/forgotpass"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        name="rememberMe">
                    Forgot password?
                    </Link>
                </div>
                <button type="submit"
                    className=" w-full text-tertiary  focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-2xl text-base md:text-lg p-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-xl inline-flex items-center justify-center transition ease-in-out duration-150 hover:bg-secondary-200">
                    Login
                </button>
                <button type="submit"
                    className="w-full text-tertiary bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-2xl text-base md:text-lg p-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 shadow-xl inline-flex justify-center items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt=""
                        width="23px" className="w  -5 h-5 mr-2" />
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
