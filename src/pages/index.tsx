import Head from 'next/head'
import { TopPage } from '../components/pages/TopPage';
import Layout from '../components/layout'

const Page: React.FC = () => {
  return (
    <>
      <Layout>
        <TopPage />
      </Layout>
    </>
  )
}

export default Page;