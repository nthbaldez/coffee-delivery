import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../../public/logo.svg'
import {
  CartButton,
  CartCount,
  HeaderContainer,
  MapAndCartContainer,
  MapPinContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export default function Header() {
  const { cart } = useCart()

  console.log(cart.length)
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>

        <MapAndCartContainer>
          <MapPinContainer>
            <MapPin size={32} weight="fill" color="purple" />
            <p>Porto Alegre, RS</p>
          </MapPinContainer>

          <CartButton>
            <NavLink to="/checkout">
              <ShoppingCart size={32} weight="fill" />
              {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
            </NavLink>
          </CartButton>
        </MapAndCartContainer>
      </nav>
    </HeaderContainer>
  )
}
