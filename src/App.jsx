import './App.css'
import Button from "./components/button/Button.jsx";
import Product from "./components/product/Product.jsx";
import Tile from "./components/tile/Tile.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import ourStoryImg from "./assets/our_story.png";
import brandImg from "./assets/brand.png";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    type='button'
                    buttonText='To the collection'
                    onDisabled={false}
                    onClick={() => console.log('To the collection')}
                />
                <Button
                    type='button'
                    buttonText='Shop all bags'
                    onDisabled={false}
                    onClick={() => console.log('Shop all bags')}
                />
                <Button
                    type='button'
                    buttonText='Pre-orders'
                    onDisabled={true}
                    onClick={() => console.log('Pre-orders')}

                />
            </nav>

            <main>
                <Product
                    productName='The handy bag'
                    productLabelText='Best seller'
                    price='€400,-'
                    imageSrc={bag1}
                    imageAltText='bag_1'
                />
                <Product
                    productName='The stylish bag'
                    productLabelText='Best seller'
                    price='€250,-'
                    imageSrc={bag2}
                    imageAltText='bag_2'
                />
                <Product
                    productName='The simple bag'
                    productLabelText='Best seller'
                    price='€300,-'
                    imageSrc={bag3}
                    imageAltText='bag_3'
                />
                <Product
                    productName='The trendy bag'
                    productLabelText='Best seller'
                    price='€150,-'
                    imageSrc={bag4}
                    imageAltText='bag_4'
                />
            </main>
            <footer>
                <Tile>
                    <h2>The brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eius esse exercitationem maiores voluptatibus? Ad amet animi expedita, nostrum obcaecati perspiciatis. Asperiores, aspernatur esse laborum officiis sunt vitae. Nulla, officia.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid animi deleniti dicta dolore dolores, id ipsa labore modi quaerat quo, quod reiciendis similique tenetur totam unde voluptates? Cumque, mollitia?</p>
                </Tile>
                <Tile>
                    <img src={brandImg} alt="brand logo" />
                </Tile>
                <Tile>
                    <img src={ourStoryImg} alt="model image" />
                </Tile>
                <Tile>
                    <h2>Our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam autem consequatur corporis
                        culpa dignissimos dolorum esse expedita facere, fugit impedit iste minus nam, nemo neque nisi
                        nobis non nulla odio officiis perferendis quasi quisquam reiciendis rem repellendus sapiente
                        sequi.</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
