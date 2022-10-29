import Head from 'next/head'
import { TopPage } from '../components/pages/TopPage';
import Layout from '../components/Layouts'

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