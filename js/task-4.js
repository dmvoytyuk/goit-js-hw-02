function getShippingCost(country) {
	const shippingCostChina = 100;
	const shippingCostChile = 250;
	const shippingCostAustralia = 170;
	const shippingCostJamaica = 120;

	switch (country) {
		case 'China':
			return `Shipping to ${country} will cost ${shippingCostChina} credits`;
		case 'Chile':
			return `Shipping to ${country} will cost ${shippingCostChile} credits`;
		case 'Australia':
			return `Shipping to ${country} will cost ${shippingCostAustralia} credits`;
		case 'Jamaica':
			return `Shipping to ${country} will cost ${shippingCostJamaica} credits`;
		default:
			return 'Sorry, there is no delivery to your country';
	}
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
