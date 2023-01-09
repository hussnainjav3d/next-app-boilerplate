import Link from "next/link"

export interface IHeader extends React.ComponentPropsWithoutRef<`header`> {}

const Navbar: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/">Home</Link>
        <Link href="/">Store</Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">Gmail</Link>
        <Link href="/">Images</Link>
      </div>
    </header>
  )
}

export default Navbar
