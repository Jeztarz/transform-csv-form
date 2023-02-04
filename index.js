const express = require("express");
const app = express();
const fs = require("fs");

let newPd = [];
let newPdAdd = [];
async function appleSheep() {
  // Read the JSON file
  const response = fs.readFileSync("727.json");
  const data = JSON.parse(response);
    newPd = data.products;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

  //detail check
  //   newPd.forEach(item => {
  //     const visible = item.visible ? "active" : ""
  //           const Option1 = item.productOptions[0] || ""
  //           const Option2 = item.productOptions[1] ? item.productOptions[1] : ""
  //           const Option3 = item.productOptions[2] ? item.productOptions[2] : ""
  //           const Option1va = Option1.choices ? Option1.choices.description : ""
  //           const Option2va = Option2.choices ? Option2.choices.description : ""
  //           const Option3va = Option3.choices ? Option3.choices.description : ""

  //           // SEO
  //           const seo = item.seoData ? item.seoData : ""
  //           const tagName = seo.tags ? seo.tags[0] ? seo.tags[0].children : "" : ""
  //           const tagDesc = seo.tags ? seo.tags[1] ? seo.tags[1].props ? seo.tags[1].props.content : "" : "" : ""

  //            // Qty
  //             const stock = item.stock.inventoryStatus === "OUT_OF_STOCK" ? "0" : "50"

  //           if(item.productOptions.length < 1) {
  //             newPdAdd.push({
  //                   "Handle": item.slug,
  //                   "Title": item.name,
  //                   "Body": item.description,
  //                   "Vendor": "",
  //                   "Product Category": "",
  //                   "Type": item.productType,
  //                   "Tags": "",
  //                   "Published": "",
  //                   "Option1 Name": Option1.name || "",
  //                   "Option1 Value": item.productOptions.description || "",
  //                   "Option2 Name": Option2.name|| "",
  //                   "Option2 Value": Option2va || "",
  //                   "Option3 Name": Option3.name || "",
  //                   "Option3 Value": Option3va || "",
  //                   "Variant SKU": "",
  //                   "Variant Grams": "",
  //                   "Variant Inventory Tracker": "shopify",
  //                   "Variant Inventory Qty": stock,
  //                   "Variant Inventory Policy": "deny",
  //                   "Variant Fulfillment Service": "manual",
  //                   "Variant Price": item.price ? item.price.discountedPrice : "",
  //                   "Variant Compare At Price": item.price ? item.price.price : "",
  //                   "Variant Requires Shipping": "TRUE",
  //                   "Variant Taxable": "TRUE",
  //                   "Variant Barcode": "",
  //                   "Image Src": "",
  //                   "Image Position": "",
  //                   "Image Alt Text": "",
  //                   "Gift Card": "",
  //                   "SEO Title": tagName || "",
  //                   "SEO Description": tagDesc || "",
  //                   "Google Shopping / Google Product Category": "",
  //                   "Google Shopping / Gender": "",
  //                   "Google Shopping / Age Group": "",
  //                   "Google Shopping / MPN": "",
  //                   "Google Shopping / AdWords Grouping": "",
  //                   "Google Shopping / AdWords Labels": "",
  //                   "Google Shopping / Condition": "",
  //                   "Google Shopping / Custom Product": "",
  //                   "Google Shopping / Custom Label 0": "",
  //                   "Google Shopping / Custom Label 1": "",
  //                   "Google Shopping / Custom Label 2": "",
  //                   "Google Shopping / Custom Label 3": "",
  //                   "Google Shopping / Custom Label 4": "",
  //                   "Variant Image": "",
  //                   "Variant Weight": 0,
  //                   "Variant Tax Code": "",
  //                   "Cost per item": "",
  //                   "Price / International": "",
  //                   "Compare At Price / International": "",
  //                   "Status": visible,

  //             });
  //           }

  //           item.productOptions.forEach(options => {
  //             options.choices.forEach(choice => {
  //             if (item.variants.length <=1 && item.productOptions.length >= 0) {
  //                 newPdAdd.push({
  //                     "Handle": item.slug,
  //                     "Title": item.name,
  //                     "Body": item.description,
  //                     "Vendor": "",
  //                     "Product Category": "",
  //                     "Type": item.productType,
  //                     "Tags": "",
  //                     "Published": "",
  //                     "Option1 Name": Option1.name || "" ,
  //                     "Option1 Value": choice.description || "",
  //                     "Option2 Name": Option2.name|| "",
  //                     "Option2 Value": Option2va || "",
  //                     "Option3 Name": Option3.name || "",
  //                     "Option3 Value": Option3va || "",
  //                     "Variant SKU": "",
  //                     "Variant Grams": "",
  //                     "Variant Inventory Tracker": "shopify",
  //                     "Variant Inventory Qty": stock,
  //                     "Variant Inventory Policy": "deny",
  //                     "Variant Fulfillment Service": "manual",
  //                     "Variant Price": item.price ? item.price.discountedPrice : "",
  //                     "Variant Compare At Price": item.price ? item.price.price : "",
  //                     "Variant Requires Shipping": "TRUE",
  //                     "Variant Taxable": "TRUE",
  //                     "Variant Barcode": "",
  //                     "Image Src": "",
  //                     "Image Position": "",
  //                     "Image Alt Text": "",
  //                     "Gift Card": "",
  //                     "SEO Title": tagName || "",
  //                     "SEO Description": tagDesc || "",
  //                     "Google Shopping / Google Product Category": "",
  //                     "Google Shopping / Gender": "",
  //                     "Google Shopping / Age Group": "",
  //                     "Google Shopping / MPN": "",
  //                     "Google Shopping / AdWords Grouping": "",
  //                     "Google Shopping / AdWords Labels": "",
  //                     "Google Shopping / Condition": "",
  //                     "Google Shopping / Custom Product": "",
  //                     "Google Shopping / Custom Label 0": "",
  //                     "Google Shopping / Custom Label 1": "",
  //                     "Google Shopping / Custom Label 2": "",
  //                     "Google Shopping / Custom Label 3": "",
  //                     "Google Shopping / Custom Label 4": "",
  //                     "Variant Image": "",
  //                     "Variant Weight": 0,
  //                     "Variant Tax Code": "",
  //                     "Cost per item": "",
  //                     "Price / International": "",
  //                     "Compare At Price / International": "",
  //                     "Status": visible,
  //                 });
  //               }
  //             });
  //           });

  //       item.variants.forEach(choice => {
  //           if (item.variants.length > 1) {
  //               newPdAdd.push({
  //                   "Handle": item.slug,
  //                   "Title": item.name,
  //                   "Body": item.description,
  //                   "Vendor": "",
  //                   "Product Category": "",
  //                   "Type": item.productType,
  //                   "Tags": "",
  //                   "Published": "",
  //                   "Option1 Name": Option1.name,
  //                   "Option1 Value": choice.choices[Option1.name] || "",
  //                   "Option2 Name": Option2.name|| "",
  //                   "Option2 Value": choice.choices[Option2.name] || "",
  //                   "Option3 Name": Option3.name || "",
  //                   "Option3 Value": choice.choices[Option3.name] || "",
  //                   "Variant SKU": "",
  //                   "Variant Grams": "",
  //                   "Variant Inventory Tracker": "shopify",
  //                   "Variant Inventory Qty": choice.stock.inStock === false ? "0" : "50",
  //                   "Variant Inventory Policy": "deny",
  //                   "Variant Fulfillment Service": "manual",
  //                   "Variant Price": item.price ? item.price.discountedPrice : "",
  //                   "Variant Compare At Price": item.price ? item.price.price : "",
  //                   "Variant Requires Shipping": "TRUE",
  //                   "Variant Taxable": "TRUE",
  //                   "Variant Barcode": "",
  //                   "Image Src": "",
  //                   "Image Position": "",
  //                   "Image Alt Text": "",
  //                   "Gift Card": "",
  //                   "SEO Title": tagName || "",
  //                   "SEO Description": tagDesc || "",
  //                   "Google Shopping / Google Product Category": "",
  //                   "Google Shopping / Gender": "",
  //                   "Google Shopping / Age Group": "",
  //                   "Google Shopping / MPN": "",
  //                   "Google Shopping / AdWords Grouping": "",
  //                   "Google Shopping / AdWords Labels": "",
  //                   "Google Shopping / Condition": "",
  //                   "Google Shopping / Custom Product": "",
  //                   "Google Shopping / Custom Label 0": "",
  //                   "Google Shopping / Custom Label 1": "",
  //                   "Google Shopping / Custom Label 2": "",
  //                   "Google Shopping / Custom Label 3": "",
  //                   "Google Shopping / Custom Label 4": "",
  //                   "Variant Image": "",
  //                   "Variant Weight": 0,
  //                   "Variant Tax Code": "",
  //                   "Cost per item": "",
  //                   "Price / International": "",
  //                   "Compare At Price / International": "",
  //                   "Status": visible,
  //               });
  //           }
  //       });
  // });

  // qty check
  // newPd.forEach((item) => {
  //   const visible = item.visible ? "active" : "";
  //   const Option1 = item.productOptions[0] || "";
  //   const Option2 = item.productOptions[1] ? item.productOptions[1] : "";
  //   const Option3 = item.productOptions[2] ? item.productOptions[2] : "";
  //   const Option1va = Option1.choices ? Option1.choices.description : "";
  //   const Option2va = Option2.choices ? Option2.choices.description : "";
  //   const Option3va = Option3.choices ? Option3.choices.description : "";

  //   // SEO
  //   const seo = item.seoData ? item.seoData : "";
  //   const tagName = seo.tags ? (seo.tags[0] ? seo.tags[0].children : "") : "";
  //   const tagDesc = seo.tags
  //     ? seo.tags[1]
  //       ? seo.tags[1].props
  //         ? seo.tags[1].props.content
  //         : ""
  //       : ""
  //     : "";

  //   // Qty
  //   const stock = item.stock.inventoryStatus === "OUT_OF_STOCK" ? "0" : "50";

  //   if (item.productOptions.length < 1) {
  //     newPdAdd.push({
  //       "Handle": item.slug,
  //       "Title": item.name,
  //       "Option1 Name": Option1.name || "",
  //       "Option1 Value": item.productOptions.description || "",
  //       "Option2 Name": Option2.name || "",
  //       "Option2 Value": Option2va || "",
  //       "Option3 Name": Option3.name || "",
  //       "Option3 Value": Option3va || "",
  //       "Variant Inventory Qty": stock
  //     });
  //   }

  //   item.productOptions.forEach((options) => {
  //     options.choices.forEach((choice) => {
  //       if (item.variants.length <= 1 && item.productOptions.length >= 0) {
  //         newPdAdd.push({
  //           "Handle": item.slug,
  //       "Title": item.name,
  //       "Option1 Name": Option1.name || "",
  //       "Option1 Value": item.productOptions.description || "",
  //       "Option2 Name": Option2.name || "",
  //       "Option2 Value": Option2va || "",
  //       "Option3 Name": Option3.name || "",
  //       "Option3 Value": Option3va || "",
  //       "Variant Inventory Qty": stock
  //       });
  //       }
  //     });
  //   });

  //   item.variants.forEach((choice) => {
  //     if (item.variants.length > 1) {
  //       newPdAdd.push({
  //       "Handle": item.slug,
  //       "Title": item.name,
  //       "Option1 Name": Option1.name || "",
  //       "Option1 Value": item.productOptions.description || "",
  //       "Option2 Name": Option2.name || "",
  //       "Option2 Value": Option2va || "",
  //       "Option3 Name": Option3.name || "",
  //       "Option3 Value": Option3va || "",
  //       "Variant Inventory Qty": choice.stock.inStock === false ? "0" : "50"
  //       });
  //     }
  //   });
  // });

  // img check
  // newPd2.forEach(item => {
  //     const visible = item.visible ? "active" : ""
  //           const Option1 = item.productOptions[0] || ""
  //           const Option2 = item.productOptions[1] ? item.productOptions[1] : ""
  //           const Option3 = item.productOptions[2] ? item.productOptions[2] : ""
  //           const Option1va = Option1.choices ? Option1.choices.description : ""
  //           const Option2va = Option2.choices ? Option2.choices.description : ""
  //           const Option3va = Option3.choices ? Option3.choices.description : ""

  //           // SEO
  //           const seo = item.seoData ? item.seoData : ""
  //           const tagName = seo.tags ? seo.tags[0] ? seo.tags[0].children : "" : ""
  //           const tagDesc = seo.tags ? seo.tags[1] ? seo.tags[1].props ? seo.tags[1].props.content : "" : "" : ""

  //           // Qty
  //           const stock = item.stock.inventoryStatus === "OUT_OF_STOCK" ? "0" : "50"

  //       item.media.items.forEach(choice => {

  //           if (item) {
  //             newPdAdd2.push({
  //                   "Title": item.name,
  //                   "Variant Inventory Qty": stock,
  //                   "Image Alt Text": choice.image ? choice.image.altText ? choice.image.altText : "" : "",
  //                   "Variant Image": choice.image ? choice.image.url : "",
  //               });
  //           }

  //       });
  // });

  //des check
  newPd.forEach(item => {
      const visible = item.visible ? "active" : ""
            const Option1 = item.productOptions[0] || ""
            const Option2 = item.productOptions[1] ? item.productOptions[1] : ""
            const Option3 = item.productOptions[2] ? item.productOptions[2] : ""
            const Option2va = Option2.choices ? Option2.choices.description : ""
            const Option3va = Option3.choices ? Option3.choices.description : ""

            // SEO
            const seo = item.seoData ? item.seoData : ""
            const tagName = seo.tags ? seo.tags[0] ? seo.tags[0].children : "" : ""
            const tagDesc = seo.tags ? seo.tags[1] ? seo.tags[1].props ? seo.tags[1].props.content : "" : "" : ""

            //stock
            const stock = item.stock.inventoryStatus === "OUT_OF_STOCK" ? "0" : "50"

            if(item) {
              newPdAdd.push({
                    "Handle": item.slug,
                    "Title": item.name,
                    "Body": item.description,
                    "additionalInfoSections":[{
                       "Description Title": item.additionalInfoSections[0] ? item.additionalInfoSections[0].title : "",
                       "Description": item.additionalInfoSections[0] ? item.additionalInfoSections[0].description : ""
                      }],

                    "Brand":item.brand,
                    "stock":stock,
                    "seo":tagName,
                    "des seo":tagDesc

              });
            }
  });

  const newFormat = JSON.stringify(newPdAdd);
  fs.writeFileSync("newJSON.json", newFormat);
}

async function boot() {
  await appleSheep();
  app.listen(4000, () => {
    console.log("Listening on port 4000");
  });
}
boot();
