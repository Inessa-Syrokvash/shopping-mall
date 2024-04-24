import { data } from "./data";

function Buttons({setClothes}) {
    const filteredClothes = (searchTerm) => {
        const newClothesArray = data.filter(item => item.searchTerm.includes(searchTerm))
        setClothes(newClothesArray)
    }

    return(
        <div className="cont">
            <button className="change" onClick={() => filteredClothes("woman")}>Woman</button>
            <button className="change" onClick={() => filteredClothes("man")}>Man</button>
            <button className="change" onClick={() => filteredClothes('dress')}>Dresses</button>
            <button className="change" onClick={() => filteredClothes('skirt')}>Skirts</button>
            <button className="change" onClick={() => filteredClothes('pants')}>Pants</button>
            <button className="change" onClick={() => filteredClothes('shoes')}>Shoes</button>
            <button className="change" onClick={() => filteredClothes('shirt')}>Shirts</button>
            <button className="change" onClick={() => setClothes(data)}>All products</button>
        </div>
    )
}

export default Buttons;