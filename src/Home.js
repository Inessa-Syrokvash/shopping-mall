import { data } from './data';
import { useState } from 'react';
import Buttons from './Buttons';
import Clothes from './Clothes';

function Home() {
    const [clothes, setClothes] = useState(data);

    const chosenClothes = (searchTerm) => {
        const newClothes = data.filter(element => element.searchTerm === searchTerm);
        setClothes(newClothes);
    }

    return(
        <div>
            <div className='cont'>
                <h2 className='back'>Free Standard Shopping</h2>
            </div>
            <Buttons setClothes={setClothes}/>
            <Clothes itemsFormSale={clothes} />
        </div>
    )
}

export default Home;