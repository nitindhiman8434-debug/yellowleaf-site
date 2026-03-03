import { WHATSAPP_NUMBER } from '../data/products';

export function generateWhatsAppCheckout(cartItems) {
  const lines = cartItems
    .map(i => `• ${i.name} (x${i.qty}) — $${(i.sale * i.qty).toFixed(2)}`)
    .join("\n");
  const total = cartItems.reduce((s, i) => s + i.sale * i.qty, 0).toFixed(2);
  const pts = Math.floor(parseFloat(total));

  const msg = `🛒 *Order Request from Yellow Leaf Cafe*

*Items:*
${lines}

*Total: $${total}*
*Loyalty Points Earned: ${pts}*

Please confirm availability and payment details. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function calcDiscount(price, sale) {
  return Math.round(((price - sale) / price) * 100);
}

export function calcPricePerGram(sale, weight) {
  if (weight && weight.includes("g") && !weight.includes("mg")) {
    const grams = parseInt(weight);
    if (grams > 0) return (sale / grams).toFixed(2);
  }
  return null;
}

export function calcPoints(amount) {
  return Math.floor(amount);
}
