import { Component } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';

class Product extends Component {
    // Função executada no Server-Side para pegar as informações do produto
    // a desestruturação que está acontecendo é pra pegar o slug do produto da url
    static async getInitialProps({ query: { product: slug }}) {
        const { data: { product } } = await axios.get(`https://petshop-ios.herokuapp.com/products/${slug}`);
        return {
            product,
        }
    }

    // Criando os estados usados na página
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            images: [],
            name: '',
            subtitle: '',
            price: 0,
            features: [],
        }
    }

    // preenchendo os estados com o valor da req ( Ocorre só no Client )
    componentDidMount() {
        this.setState({
            id: this.props.product.id,
            images: this.props.product.images,
            name: this.props.product.name,
            subtitle: this.props.product.subtitle,
            price: this.props.product.price,
            features: this.props.product.features,
        });
    }
    
    render() {
        const {
            id,
            images,
            name,
            subtitle,
            price,
            features,
        } = this.state;
        return (
            <div className="container" >
                {/* Personalizando o title da página e instanciando o css da public */}
                <Head>
					<link href="/static/styles/ProductPage.style.css" rel="stylesheet" />
                    <title>Lojinha Caju - {name}</title>
				</Head>
                <Link href="/" as="/">
                    <span>Voltar</span>
                </Link>
                <div className="wrapperText" >
                    <h1>{id} - {name}</h1>
                    <small>{subtitle}</small>
                </div>
                <div className="imageWrapper" >
                    {
                        images.map(({ id, url }) => (
                            <img src={url} key={id} />
                        ))
                    }
                </div>
                <div>
                    <p>R$ {Number(price).toFixed(2).replace('.', ',')}</p>
                    <ul>
                        {
                            features.map(feature => (
                                <li key={feature}>
                                    {feature}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Product;
