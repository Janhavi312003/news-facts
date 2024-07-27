<script>
    export let form;
  </script>
  <body class="bg-[#002349] h-screen">
  <div
    class="bg-[#FFCE32] mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg     ring-2 ring-gray-900/50 "
  >
    <form method="POST" action="?/login">
      <div class="">
        <div class="">
          <label
            class="bg-[#4681F4] text-white py-2 pl-3 pr-3"
            for="paymail">
            Paymail
          </label>
          <input
            class="py-2 pl-2 pr-2 bg-white"
            id="paymail"
            type="text"
            name="email"
            placeholder="Enter Paymail"
          />
        </div>
        <br>
        <div class="">
          <label
            class="bg-[#4681F4] text-white py-2 pl-2 pr-2"
            for="password"
          >
            Password
          </label>
          <input
            class="py-2 pl-2 pr-2 bg-white"
            id="password"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </div>
        <br>
        <button
          type="submit"
          class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
        >
          LogIn
        </button>
      </div>
    </form>
    {#if form?.success}
      <!-- this message is ephemeral; it exists because the page was rendered in
         response to a form submission. it will vanish if the user reloads -->
      <p class="pt-2">Logged In. Your Balance is {form?.balance}</p>
      <p class="pt-2">Your Address is {form?.address}</p>
    {/if}
  </div>
  
  <div
    class="bg-[#FFCE32] mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg ring-2 ring-gray-900/50"
  >
    <form method="POST" action="?/signup">
      <div class="">
        <div class="">
          <label
            class="bg-[#4681F4] text-white py-2 pl-3 pr-3"
            for="paymail"
          >
            Paymail
          </label>
          <input
            class="py-2 pl-2 pr-2 bg-white"
            id="paymail"
            type="text"
            name="email"
            placeholder="Enter Paymail"
          />
        </div>
        <br>
        <div class="">
          <label
            class="bg-[#4681F4] text-white py-2 pl-2 pr-2"
            for="password"
          >
            Password
          </label>
          <input
            class="py-2 pl-2 pr-2 bg-white"
            id="password"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </div>
        <br>
        <button
          type="submit"
          class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
        >
          Sign Up
        </button>
      </div>
    </form>
    {#if form?.success}
      <!-- this message is ephemeral; it exists because the page was rendered in
         response to a form submission. it will vanish if the user reloads -->
      <p class="pt-2">Sign Up Done </p>
    {/if}
  </div>
  </body>