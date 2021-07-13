import {ReactNode} from "react"
import { FaUserCircle } from 'react-icons/fa'

interface CartCompletedJobPros{
    children:ReactNode,
}

const CartCompletedJob = ({children, ...rest }:CartCompletedJobPros) =>{
    return (
        <div >
            <FaUserCircle/>
            {children}
        </div>
    )
}

export default CartCompletedJob;