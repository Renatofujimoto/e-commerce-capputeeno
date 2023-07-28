<<<<<<< HEAD:src/components/cart-control.tsx
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartIcon } from './cart-icon'
import { styled } from 'styled-components'

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;

  background-color: var(--delete-color);
  color: white;

  margin-left: -10px;
`
const Container = styled.div`
  position: relative;
`

export function CartControl() {
  const { value } = useLocalStorage('cart-items', [])

  return (
    <Container>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}
=======
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import { styled } from "styled-components";

const CartCount = styled.span `
  width:17px;
  height:17px;
  background-color: var(--delete-color);
  color:white;

  position:absolute;
  right: -10px;
  top: 50%;
`
const Container = styled.div `
  position: relative;
`

export function CartControl() {
  const {value} = useLocalStorage("cart-items", [])


  return(
    <Container>
      <CartIcon/>
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}
>>>>>>> e94941c21063b48a04e67845a586c4ee7419f7fb:capputeeno/components/cart-control.tsx
