import Link from "next/link"

export interface IHeader extends React.ComponentPropsWithoutRef<`header`> {}

const Navbar: React.FC<IHeader> = ({ ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between text-skin-base bg-skin-fill`}
    >
      <div className="space-x-5 m-5">
        <h2>Logo</h2>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">Home</Link>
        <Link href="/">Guide</Link>
        <Link href="/about">About</Link>
        <Link href="/">Support</Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">Login</Link>
        <Link href="/">SignUp</Link>
      </div>
    </header>
  )
}

export default Navbar
