module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/assets/scss/_preload.scss";
				`,
			},
		},
	},
	publicPath:
		process.env.NODE_ENV === 'production' ? '/QR-vue-tailwind/' : '/',
};
