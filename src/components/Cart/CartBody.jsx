import React from 'react'
import { useCartContext } from '../../context/CartContext/CartProvider'
import Item from './Item';
import CartTotal from './CartTotal';

const CartBody = ({action,setShowCustomizePopup,setcartItem}) => {

  const [{cartItems}] = useCartContext();

  return (
    <div className='w-full h-full rounded-t-[2rem]  bg-cartBg flex flex-col'>
        <div className='w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-hidden'>
        {
          cartItems && cartItems.length > 0 && cartItems.map((item, index) => {
            return <Item key={index} item={item} setShowCustomizePopup={setShowCustomizePopup} setcartItem={setcartItem} />
          } )
        }
        </div>
        <CartTotal checkoutState={action} />
    </div>
  )
}

export default CartBody