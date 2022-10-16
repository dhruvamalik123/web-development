const mongoose = require("mongoose");
async function main() {
  await mongoose.connect("mongodb://localhost:27017/Products");
  console.log("Connection Established");
  const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    onSale: {
      type: Boolean,
      default: false,
    },
    qty: {
      online: {
        type: Number,
        default: 0,
      },
      offline: {
        type: Number,
        default: 0,
      },
    },
  });
  const Product = mongoose.model("Product", productSchema);
  const Coffee = new Product({ name: "Brew", price: 25 });
  const Milk = new Product({ name: "Verka", price: 50 });
  Coffee.save()
    .then((data) => {
      console.log("inserted successfully");
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  //   Milk.save()
  //     .then((data) => {
  //       console.log("inserted successfully");
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //----------------------------------------------IMPORTANT---------------------------------------------------------
  //when we use findoneandupdate,after setting up the validators like type and minlenght and maxlength ,the
  //   validators directly apply only during creating , but not PaymentRequestUpdateEvent,so to apply validators
  //   during the findoneandupdate,we need to add another validator runValidators:true in the findOneandUpdate Query
  //    productSchema.findOneandUpdate({name:"milk"},{price:-9.99},{new:true,runValidators:true})
  //----------------------------------------------------------------------------------------------------------------.
}
main().catch((err) => {
  console.log("Connection Failed");
  console.log(err);
});
