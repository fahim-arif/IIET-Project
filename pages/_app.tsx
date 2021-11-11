import Head from "next/head";
import type { AppProps } from 'next/app'
import Script from 'next/script'
import SimpleReactLightbox from 'simple-react-lightbox'
// import css from 'file.css'

//Initializations All Css
import '../styles/index.css';
// import '../styles/index.css.map';
import '../styles/index.scss';



// const newLocal = "../webpack.config";
// const Slider = dynamic(() => import(newLocal), {
//   ssr: false,
// });


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <SimpleReactLightbox>

      <Component {...pageProps} />

    </SimpleReactLightbox>
    <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
    <Script src="/public/plugin/js/jquery-3.6.0.min.js" />
    <Script src="/public/plugin/js/bootstrap.min.js" />
  </>
}

export default MyApp
