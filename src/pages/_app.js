// Inicializando app root
import App from 'next/app';
// Aplicando estilo global
import '../utils/globalStyle.css';

class MyApp extends App {
  render() {
    // Recebendo e renderizando o componente (Página e suas props)
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
