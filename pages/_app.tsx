import type { AppProps } from 'next/app'
import SimpleReactLightbox from 'simple-react-lightbox'
import {ChakraProvider, CSSReset} from '@chakra-ui/react';

//Initializations All Css
import '../styles/index.css';
import '../styles/index.scss';





function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <CSSReset />
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  </ChakraProvider>
}

export default MyApp
