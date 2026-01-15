import "@/app/globals.css";

interface AppProps {
  Component: React.ElementType;
  pageProps: [];
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
