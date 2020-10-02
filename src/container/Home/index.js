import { Component, Fragment } from 'react';
import axios from 'axios';
import Head from 'next/head';
import ProductCard from '../../components/ProductCard';

class Home extends Component {
	// Função executada no Server-Side que traz os produtos da api para listagem
    static async getInitialProps() {
        const { data } = await axios.get('https://petshop-ios.herokuapp.com/products');
			return {
				products: data,
			}
		}
		
	constructor(props) {
		// Criação de estado para listagem de produtos
		super(props);
		this.state = {
			products: [],
		}
	}

	// preenchimento de estado com dados retornados da api ( Ocorre só no Client )
	componentDidMount() {
		this.setState({
			products: this.props.products,
		})
	}
    
    render() {
		// pegando lista de produtos ( Ocorre no Server e no Client )
		const { products } = this.state;
        return (
			<Fragment>
				<Head>
					<link href="/static/styles/Home.style.css" rel="stylesheet" />
				</Head>
				<img src="/static/images/dog.png" alt="banner" className="banner" />
				<div className="list">
					{
						products.map(({ id, image, name, price, slug }) => (
							<ProductCard 
								key={id}
								image={image}
								name={name}
								price={price}
								slug={slug}
							/>
						))
					}
				</div>
			</Fragment>
		);
    }
}

export default Home;
