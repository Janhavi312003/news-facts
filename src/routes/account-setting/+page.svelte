<div class="flex h-screen bg-gray-200">
    <!-- Sidebar -->
    <div class="fixed inset-y-0 left-0 w-60 bg-white text-gray-900 -transform transform lg:transform-none lg:static z-30">
      <div class="flex items-center justify-center h-16 bg-gray-100 border-b border-gray-300">
        <h1 class="block py-2.5 px-10 font-bold text-gray-900">Account Settings</h1>
      </div>
      <nav class="mt-4">
        <a class="flex items-center justify-center h-12 text-gray-700 hover:bg-gray-100 hover:text-blue-700" href="/profiles">Profile</a>
        <a class="flex items-center justify-center h-12 text-gray-700 hover:bg-gray-100 hover:text-blue-700" href="/account-settings">Account Settings</a>
        <a class="flex items-center justify-center h-12 text-gray-700 hover:bg-gray-100 hover:text-blue-700" href="/subscription-preferences">Subscription Preferences</a>
      </nav>
    </div>
  
    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="flex items-center justify-between p-6 bg-gray-100 border-b border-gray-300">
        <h1 class="text-2xl font-bold text-gray-700">Account Settings</h1>
      </header>
  
      <!-- Main content area -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
        <div class="container mx-auto px-4">
          <!-- Change Username -->
          <section class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900">Change Username</h2>
            <form action="/update-username" method="POST">
              <div class="mb-4">
                <label for="current-username" class="block text-gray-700 text-sm font-medium mb-2">Current Username:</label>
                <input type="text" id="current-username" name="current-username" class="w-full p-3 border border-gray-300 rounded-lg" required>
              </div>
              <div class="mb-4">
                <label for="new-username" class="block text-gray-700 text-sm font-medium mb-2">New Username:</label>
                <input type="text" id="new-username" name="new-username" class="w-full p-3 border border-gray-300 rounded-lg" required>
              </div>
              <button type="submit" class="py-2 px-4 bg-blue-600 text-grey font-semibold rounded-lg hover:bg-blue-700">Update Username</button>
            </form>
          </section>
  
          <!-- Change Password -->
          <section class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900">Change Password</h2>
            <form action="/update-password" method="POST">
              <div class="mb-4">
                <label for="current-password" class="block text-gray-700 text-sm font-medium mb-2">Current Password:</label>
                <input type="password" id="current-password" name="current-password" class="w-full p-3 border border-gray-300 rounded-lg" required>
              </div>
              <div class="mb-4">
                <label for="new-password" class="block text-gray-700 text-sm font-medium mb-2">New Password:</label>
                <input type="password" id="new-password" name="new-password" class="w-full p-3 border border-gray-300 rounded-lg" required>
              </div>
              <div class="mb-4">
                <label for="confirm-password" class="block text-gray-700 text-sm font-medium mb-2">Confirm New Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" class="w-full p-3 border border-gray-300 rounded-lg" required>
              </div>
              <button type="submit" class="py-2 px-4 bg-blue-600 text-grey font-semibold rounded-lg hover:bg-blue-700">Update Password</button>
            </form>
          </section>
  
         
        </div>
      </main>
    </div>
  </div>
  