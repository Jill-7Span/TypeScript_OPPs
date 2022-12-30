import { express } from "express";
import users from "../users/users";
import product from "../products/product";
import cart from "../carts/cart";
import order from "../orders/order";

const router = express.Router();

// Routes
router.use("/users", users);

router.use("/product", product);

router.use("/cart", cart);

router.use("/order", order);

router.use("/test", users)


module.exports = router;


