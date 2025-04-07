export default function Header() {
    const menuList = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About-us",
            link: "/about-us"
        },
        {
            name: "Contact Us",
            link: "/contact-us"
        },
    ];
    return (
        <nav className="py-4 px-14 border-b">
            <img className="h-9" src="/logo.png" alt="" />
        </nav>
    );
}