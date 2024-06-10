import('node-fetch')

let stats;
let prices;
let GoodItems;

setInterval(() => {
  GoodItems = [];
  fetch("https://api.hypixel.net/v2/skyblock/bazaar?key=b66cdb93-fb56-4ed4-bc58-d978549f9b50").then(res => res.json()).then(data => {
  
  stats = Object.values(data.products)

  stats.forEach(item => {
    if(item.quick_status.sellMoving >= 10000 || item.quick_status.buyVolume <= 1000 && item.quick_status.buyPrice <= 3000000 && !item.product_id.includes("ENCHANTMENT")) {
      GoodItems.push(item.product_id);
      if(item.product_id == "COMPACTOR") {
        console.log(item)
      }
    }
  });

  console.log(GoodItems);
});
}, 1200);

