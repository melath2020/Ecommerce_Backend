const express=require('express')
const {createUser, loginUserCtrl, getallUser, getaUser, deleteaUser, updatedUser, blockUser, unblockUser,handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishlist, saveAddress, userCart, getUserCart, emptyCart, applyCoupon, createOrder, getOrders, updateOrderStatus, getAllOrders, getOrderByUserId, removeProductFromCart, updateProductQuantityFromCart, getMyOrders, getMonthWiseOrderIncome, getMonthWiseOrderCount, getYearlyTotalOrders}=require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/AuthMiddleware');
const { checkout, paymentVerification } = require('../controller/paymentCtrl');

const router=express.Router();


router.post('/register',createUser);
router.put('/password',authMiddleware,updatePassword)
router.post('/login',loginUserCtrl);
router.post('/admin-login',loginAdmin);
router.post('/cart',authMiddleware,userCart );
router.post('/cart/create-order',authMiddleware,createOrder);
router.post('/order/checkout',authMiddleware,checkout);
router.post('/order/paymentVerification',authMiddleware,paymentVerification);
router.get('/getmyorders',authMiddleware,getMyOrders);
// router.post('/cart/applycoupon',authMiddleware,applyCoupon );
// router.get('/all-users',getallUser);

// router.get('/getallorders',authMiddleware,isAdmin,getAllOrders);
// router.post('/getorderbyuser/:id',authMiddleware,isAdmin,getOrderByUserId);
// router.get("/refresh", handleRefreshToken);
router.post("/forgot-password-token",forgotPasswordToken)
// router.put("/order/update-order/:id",authMiddleware,isAdmin,updateOrderStatus)
router.put("/reset-password/:token",resetPassword)

router.get("/logout",logout)
router.get('/wishlist',authMiddleware,getWishlist);
router.get('/cart',authMiddleware,getUserCart);
router.get('/getMonthWiseOrderIncome',authMiddleware,getMonthWiseOrderIncome);
router.get('/getYearlyTotalOrders',authMiddleware,getYearlyTotalOrders);

router.get('/:id',authMiddleware,isAdmin,getaUser);
// router.delete('/empty-cart',authMiddleware,emptyCart);
router.delete('/delete-product-cart/:cartItemId',authMiddleware,removeProductFromCart);
router.delete('/update-product-cart/:cartItemId/:newQuantity',authMiddleware,updateProductQuantityFromCart);


router.delete('/:id',deleteaUser);
router.put("/edit-user", authMiddleware,updatedUser);
router.put("/save-address", authMiddleware,saveAddress);
router.put("/block-user/:id", authMiddleware,isAdmin,blockUser);
router.put("/unblock-user/:id", authMiddleware,isAdmin,unblockUser);


module.exports=router;