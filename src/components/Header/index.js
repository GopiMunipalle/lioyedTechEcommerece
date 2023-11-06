import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BiSignal5} from 'react-icons/bi'
import {BsWifi, BsBatteryFull} from 'react-icons/bs'
import {FaCarrot} from 'react-icons/fa'
import {GiChocolateBar} from 'react-icons/gi'
import {MdOutlineBakeryDining} from 'react-icons/md'
import {GiCannedFish} from 'react-icons/gi'
import {TbEggs} from 'react-icons/tb'
import {IoFastFoodOutline} from 'react-icons/io'

import './index.css'

function Header() {
  return (
    <div className="header-bg-container">
      <div className="cart-timer-container">
        <p className="time">00:00</p>
        <div className="cart-battery-container">
          <BiSignal5 />
          <BsWifi />
          <BsBatteryFull />
        </div>
      </div>
      <div className="cart-heading-container">
        <h1 className="e-com-heading">Ecommerece</h1>
        <div className="cart-logo-container">
          <AiOutlineShoppingCart />
          <p>0</p>
        </div>
      </div>
      <div className="cart-header-items-container">
        <div className="button-items-card">
          <button type="button" className="cart-item">
            <FaCarrot />
          </button>
          <p className="item-name">Produce</p>
        </div>
        <div className="button-items-card">
          <button type="button" className="cart-item">
            <GiChocolateBar />
          </button>
          <p className="item-name">Sweets</p>
        </div>
        <div className="button-items-card">
          <button type="button" className="cart-item">
            <MdOutlineBakeryDining />
          </button>
          <p className="item-name">Bakery</p>
        </div>
        <div className="button-item-card">
          <button type="button" className="cart-item">
            <GiCannedFish />
          </button>
          <p className="item-name">Canned</p>
        </div>
        <div className="button-item-card">
          <button type="button" className="cart-item">
            <TbEggs />
          </button>
          <p className="item-name">Eggs</p>
        </div>
        <div className="button-item-card">
          <button type="button" className="cart-item">
            <IoFastFoodOutline />
          </button>
          <p className="item-name">FastFood</p>
        </div>
      </div>
    </div>
  )
}

export default Header
