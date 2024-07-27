<script>
    export let user;
    export let walletDetails;
    export let archives;
  </script>
  
  <div class="flex h-screen bg-gray-200">
    <!-- Sidebar -->
    <div class="fixed inset-y-0 left-0 w-60 bg-white text-gray-900 -transform transform lg:transform-none lg:static z-30">
      <div class="flex items-center justify-center h-16 bg-gray-100 border-b border-gray-300">
        <h1 class="block py-2.5 px-10 font-bold text-gray-900">Profile</h1>
      </div>
      <nav class="mt-4">
        <a class="flex items-center justify-center h-12 text-gray-700 hover:bg-gray-100 hover:text-blue-700" href="/profile">Profile</a>
        <a class="flex items-center justify-center h-12 text-gray-700 hover:bg-gray-100 hover:text-blue-700" href="/account-settings">Account Settings</a>
        <a class="flex items-center justify-center h-12 text-gray-700 hover:bg-gray-100 hover:text-blue-700" href="/subscription-preferences">Subscription Preferences</a>
      </nav>
    </div>
  
    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="flex items-center justify-between p-6 bg-gray-100 border-b border-gray-300">
        <h1 class="text-2xl font-bold text-gray-700">User Profile</h1>
      </header>
  
      <!-- Main content area -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
        <div class="container mx-auto px-4">
          <!-- User Information -->
          <section class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900">User Information</h2>
            <div class="flex items-center space-x-4">
              <img src="https://via.placeholder.com/100" alt="User Photo" class="w-24 h-24 rounded-full border border-gray-300">
              <div>
                <p class="text-lg font-semibold text-gray-900">{user.name}</p>
                <p class="text-gray-700">{user.email}</p>
              </div>
            </div>
          </section>
  
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <!-- Connected Wallet Details -->
            <section class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 class="text-2xl font-semibold mb-4 text-gray-900">Connected Wallet Details</h2>
              <ul class="space-y-4">
                {#each walletDetails as wallet}
                  <li class="flex justify-between text-gray-700">
                    <span>{wallet.name}:</span>
                    <span>{wallet.address}</span>
                  </li>
                {/each}
              </ul>
            </section>
  
            <!-- Daily Newspaper Archive -->
            <section class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 class="text-2xl font-semibold mb-4 text-gray-900">Daily Newspaper Archive</h2>
              <ul class="space-y-4">
                {#each archives as archive}
                  <li><a href="/" class="text-blue-500 hover:underline">{archive.date} - {archive.edition}</a></li>
                {/each}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>