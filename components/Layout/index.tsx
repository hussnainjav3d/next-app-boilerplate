import Footer from "components/Footer"
import Navbar from "components/Navbar"
import Head from "next/head"

export interface ILayout extends React.ComponentPropsWithoutRef<`div`> {
  justify?: `items-center` | `items-start`
}

const Layout: React.FC<ILayout> = ({
  children,
  justify = `items-center`,
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>Tour 27</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        <Navbar />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  )
}

export default Layout
