import { Component, Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Criando card de produto usado na home
class ProductCard extends Component {
    // Criando estados utilizados no card
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            name: "",
            slug: "",
            price: 0,
        }
    }

    // preenchendo os estados com as props
    componentDidMount() {
        this.setState({
            image: this.props.image,
            name: this.props.name,
            slug: this.props.slug,
            price: this.props.price,
        })
    }

    // Renderizando card
    render() {
        const { image, name, slug, price } = this.state;
        return (
            <Fragment>
                <Head>
                    <link href="/static/styles/ProductCard.style.css" rel="stylesheet" />
                </Head>
                <Link href="/product/:slug" as={`/product/${slug}`}>
                    <div className="card">
                        <img src={image} alt={name} title={name} />
                        <div className="wrapper">
                            <h2>{name}</h2>
                            <span>R${Number(price).toFixed(2).replace('.', ',')}</span>
                        </div>
                    </div>
                </Link>
            </Fragment>
        );
    }
}

export default ProductCard;
