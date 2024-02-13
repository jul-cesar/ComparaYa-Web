import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import Total from "../productsPage/Carrito/Total"
import CardCart from "../productsPage/Carrito/CardCart"
import { useContext } from "react"
import { SidebarContext } from "@/context/sidebarContext"

export function SheetDemo() {
    const { productsInCart, setProductsInCart } =
        useContext(SidebarContext);
    return (
        <Sheet>
            <SheetTrigger asChild>
                <svg
                    className="flex-shrink-0 w-6  h-9 mr-2 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                >
                    <path d={"M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
                    } />
                </svg>
            </SheetTrigger>
            <SheetContent className="overflow-auto w-[305px] sm:w-[520px]">
                <SheetHeader>
                    <SheetTitle>Planea tu compra</SheetTitle>
                    <SheetDescription>
                        Agrega productos
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col justify-center">

                    {productsInCart.map((cart) => (
                        <CardCart
                            key={cart.id}
                            img={cart.img}
                            precio_d1={cart.precio_d1}
                            precio_exito={cart.precio_exito}
                            precio_olim={cart.precio_olim}
                            quantity={cart.quantity}
                            name={cart.nombre}
                            setProductsInCart={setProductsInCart}
                            productsInCart={productsInCart}
                            id={cart.id}
                        />
                    ))}

                    {productsInCart.length !== 0 && <Total />}

                </div>
                <SheetFooter>

                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
