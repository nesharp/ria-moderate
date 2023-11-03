import { ImagesSrc } from '@/lib/images'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className="h-20 w-full bg-red-100/50 flex items-center  relative">
            <a href="https://ria.com">
                <img src={ImagesSrc.logo} className="h-16 w-16 rounded-lg ml-3" />
            </a>
            <div className="w-full flex justify-center items-center gap-2 absolute cursor-pointer">
                <img
                    src={ImagesSrc.urkraineFlag}
                    className="h-5 w-6 rounded-s-md"
                    alt=""
                />
                <a
                    className=" relative before:absolute before:w-0  before:bg-yellow-400 before:h-0.5 before:top-6 before:transition-all hover:before:w-full text-sm lg:text-lg"
                    href="https://auto.ria.com/uk/auto-for-zsu/?utm_source=main_page&utm_medium=header&utm_campaign=autoforzsu&r_audience=web&r_source=main_page&r_medium=header&r_campaign=autoforzsu"
                >
                    Збір на авто для ЗСУ
                </a>
            </div>
        </header>
    )
}
