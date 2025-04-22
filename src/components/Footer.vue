<template>
  <footer class="bg-black text-white">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <!-- Logo dan Deskripsi -->
        <div class="mb-6 md:mb-0 max-w-sm">
          <a href="#" class="flex items-center">
            <img src="/public/assets/img/logo UMNPC.png" class="" alt="UMNPC Logo" />
          </a>
          <p class="mt-4 text-sm text-gray-400">
            Fostering a community of programmers at the University Multimedia Nusantara.
            <br />
            #WeCodeForTheFuture
          </p>
        </div>

        <!-- Quick Links -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase">Quick Links</h2>
            <ul class="text-gray-400 font-medium space-y-2">
              <li><a href="#" class="hover:underline">Committee</a></li>
              <li><a href="#" class="hover:underline">Join the Club</a></li>
              <li><a href="#" class="hover:underline">Contact</a></li>
            </ul>
          </div>

          <!-- Kosong untuk spasi tengah -->
          <div></div>

          <!-- Social Media -->
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase">Connect With Us</h2>
            <div class="flex space-x-6">
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i class="fa-solid fa-envelope"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-6 border-gray-700" />

      <!-- Copyright -->
      <div class="text-sm text-gray-500 text-center sm:text-left">
        © 2025 UMN Programming Club. All rights reserved.
      </div>
    </div>
  </footer>
</template>
