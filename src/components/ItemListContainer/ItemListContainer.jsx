import { useEffect, useState } from "react";
import { getProducts } from "../../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ title }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(response => {
                console.log(category,'category');
                console.log(response,'response');
                if (category) {
                    const filteredItems = response.filter(item => item.category === category);
                    setItems(filteredItems);
                } else {
                    setItems(response);
                }
            })
            .catch(err => { console.error(err) })
            .finally(() => {
                setLoading(false);
            });
    }, [category]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem', borderRadius: '0.5rem' }}>
            {loading ? (<p>Loading...</p>) :
                <ItemList props={{ items }} />
            }
        </div>
    );
};

export default ItemListContainer;