import Link from 'next/link'
import { ReactNode } from 'react'

interface NavLinkProps {
    href: string
    children: ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link
            className="py-8 px-4 duration-150 border-b-2 border-white hover:border-black"
            href={href}
        >
            {children}
        </Link>
    )
}
