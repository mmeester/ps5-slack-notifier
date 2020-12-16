const puppeteer = require('puppeteer');

const shopUrls = [
  {
    site: 'Media Markt',
    product: 'SONY PlayStation 5 Disk Edition',
    url: 'https://www.mediamarkt.nl/nl/product/_sony-playstation-5-disk-edition-1664768.html',
    addToCartElement: '#pdp-add-to-cart'
  },
  {
    site: 'Media Markt',
    product: 'SONY PlayStation 5 Digital Edition',
    url: 'https://www.mediamarkt.nl/nl/product/_sony-playstation-5-digital-edition-1665134.html',
    addToCartElement: '#pdp-add-to-cart'
  },
  {
    site: 'Amazon NL',
    product: 'PlayStation®5 - Console',
    url: 'https://www.amazon.nl/dp/B08H93ZRK9/',
    addToCartElement: '#priceblock_ourprice'
  },
  {
    site: 'Amazon NL',
    product: 'PlayStation®5 - Digital Edition',
    url: 'https://www.amazon.nl/Sony-PlayStation-PlayStation%C2%AE5-Digital-Edition/dp/B08H98GVK8',
    addToCartElement: '#priceblock_ourprice'
  },
  {
    site: 'Bol.com',
    product: 'Sony PlayStation 5 Console',
    url: 'https://www.bol.com/nl/p/sony-playstation-5-console/9300000004162282/',
    addToCartElement: '.js_floating_basket_btn.js_btn_buy.js_preventable_buy_action'
  },
  {
    site: 'Coolblue',
    product: 'PlayStation 5',
    url: 'https://www.coolblue.nl/product/865866/playstation-5.html',
    addToCartElement: '.button button--order.button--full-width.js-add-to-cart-button'
  },
  {
    site: 'Coolblue',
    product: 'PlayStation 5',
    url: 'https://www.coolblue.nl/product/865867/playstation-5-digital-edition.html',
    addToCartElement: '.button button--order.button--full-width.js-add-to-cart-button'
  },
  {
    site: 'GameMania',
    product: 'PlayStation 5 Disc Edition',
    url: 'https://www.gamemania.nl/Consoles/playstation-5/144093_playstation-5-disc-edition',
    addToCartElement: '.lnk.lnk--button.lnk--addToCart:not(.lnk--button--disabled)'
  },
  {
    site: 'GameMania',
    product: 'PlayStation 5 Digital Edition',
    url: 'https://www.gamemania.nl/Consoles/playstation-5/145721_playstation-5-digital-edition',
    addToCartElement: '.lnk.lnk--button.lnk--addToCart:not(.lnk--button--disabled)'
  }
];


(async () => {
  const browser = await puppeteer.launch();
  
  
  for(let i=0; i < shopUrls.length; i++) {
    const page = await browser.newPage();
    await page.goto(shopUrls[i].url);
    
    if (await page.$(shopUrls[i].addToCartElement) !== null) { 
      console.log(`${shopUrls[i].product} found at ${shopUrls[i].site}`);
    }else {
      console.log(`${shopUrls[i].product} not found at ${shopUrls[i].site}`);
    }
    
  }
  await browser.close();
})();