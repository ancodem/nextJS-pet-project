import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { Provider } from 'react-redux'
import { store } from 'redux/store'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </>
)

export default MyApp
