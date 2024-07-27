<div class="flex h-screen bg-gray-200">
    <!-- Sidebar -->
    <div class="fixed inset-y-0 left-0 w-60 bg-[#026670] bg-no-repeat text-gray-900 -transform transform lg:transform-none lg:static z-30">
    <div class="fixed inset-y-0 left-0 w-60 bg-white text-gray-900 -transform transform lg:transform-none lg:static z-30">
      <div class="flex items-center justify-center h-16 bg-gray-100 border-b border-gray-300">
        <h1 class="block py-5 py-3 pl-10 pr-10 font-bold text-white bg-[#2E4053]">Dashboard</h1>
      </div>
      <nav class="">
        <a class="flex items-center justify-center h-12 text-gray-700 font-bold bg-[#F5F5DC] hover:bg-[#7091E6] hover:text-white" href="/publish">Publish</a>
        <a class="flex items-center justify-center h-12 text-gray-700 font-bold bg-[#F5F5DC] hover:bg-[#7091E6] hover:text-white" href="/feeds">Feeds</a>
        <a class="flex items-center justify-center h-12 text-gray-700 font-bold bg-[#F5F5DC] hover:bg-[#7091E6] hover:text-white" href="/profiles">Profile</a>
        <a class="flex items-center justify-center h-12 text-gray-700 font-bold bg-[#F5F5DC] hover:bg-[#7091E6] hover:text-white" href="/settings">Settings</a>
      </nav>
      </div>
      <!-- Categories and Notifications -->
      <div class="p-6 bg-[#F5F5DC] border-t border-gray-300 mt-4">
        <h2 class="text-xl font-semibold mb-4 text-gray-900">Categories</h2>
        <ul class="space-y-2">
          <li><a href="/" class="text-blue-500 hover:underline">Technology</a></li>
          <li><a href="/" class="text-blue-500 hover:underline">World</a></li>
          <li><a href="/" class="text-blue-500 hover:underline">Sports</a></li>
          <li><a href="/" class="text-blue-500 hover:underline">Entertainment</a></li>
        </ul>
        <h2 class="text-xl font-semibold mt-8 mb-4 text-gray-900">Notifications</h2>
        <p class="text-gray-700">You have 3 new notifications.</p>
      </div>
    </div>
  
    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <div class="flex items-center justify-between p-6 bg-gray-100 border-b border-gray-300">
        <button class="lg:hidden text-gray-500 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <h1 class="text-xl font-bold text-gray-700">Welcome</h1>
      </div>
  
      <!-- Main content area -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Recent News -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 class="text-2xl font-semibold mb-4 text-gray-900">Recent News</h2>
              <ul class="space-y-4">
                <li><a href="/" class="text-blue-500 hover:underline">Breaking: Major Tech Company Announces New Product</a></li>
                <li><a href="/" class="text-blue-500 hover:underline">Global Markets React to Economic Shifts</a></li>
                <li><a href="/" class="text-blue-500 hover:underline">Top Stories from the Entertainment World</a></li>
              </ul>
            </div>
  
            <!-- Popular News -->
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 class="text-2xl font-semibold mb-4 text-gray-900">Popular News</h2>
              <ul class="space-y-4">
                <li><a href="/" class="text-blue-500 hover:underline">The Most Talked-About Events of the Week</a></li>
                <li><a href="/" class="text-blue-500 hover:underline">Top Trends in Technology for 2024</a></li>
                <li><a href="/" class="text-blue-500 hover:underline">Celebrity News: What’s Happening in Hollywood</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>