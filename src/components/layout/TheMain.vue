<template>
	<main class="flex flex-auto items-center justify-center p-6">
		<article
			class="w-80 rounded-2.5xl bg-white p-4 shadow-xl dark:bg-dark-blue">
			<div class="overflow-hidden rounded-xl">
				<figure
					class="relative h-0 bg-light-gray pb-full dark:bg-grayish-blue">
					<img
						class="absolute top-0 left-0 h-full w-full object-cover"
						:src="require('@/assets/images/qr-code.png')"
						alt="" />
				</figure>
			</div>
			<div class="space-y-4 px-4 py-6 text-center">
				<h2 class="text-xl font-bold text-dark-blue dark:text-white">
					Improve your front-end skills by building projects
				</h2>
				<p>
					Scan the QR code to visit Frontend Mentor and take your
					coding skills to the next level
				</p>
			</div>
		</article>
	</main>
</template>
