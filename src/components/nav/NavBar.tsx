import NavLink from './NavLink'

export default function NavBar() {
    return (
        <div className="flex justify-center md:justify-start mb-4">
            <NavLink href={'/'}>Home</NavLink>

            <NavLink href={'/cars'}>Cars</NavLink>

            <NavLink href={'/help'}>Help</NavLink>

            <NavLink href={'/contact-us'}>Contact us</NavLink>
        </div>
    )
}
