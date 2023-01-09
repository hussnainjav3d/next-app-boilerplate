import About from "components/About"
import Layout from "components/Layout"
import { NextPageWithLayout } from "types/page"

const AboutPage: NextPageWithLayout = () => {
  return <About test="This is new Era" />
}

export default AboutPage

AboutPage.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
