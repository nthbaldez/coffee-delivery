import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../../public/logo.svg'
import { HeaderContainer, MapAndCartContainer, MapPinContainer } from './styles'
import { NavLink } from 'react-router-dom'

export default function Header() {
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

          <NavLink to="/checkout">
            <ShoppingCart size={32} weight="fill" />
          </NavLink>
        </MapAndCartContainer>
      </nav>
    </HeaderContainer>
  )
}
