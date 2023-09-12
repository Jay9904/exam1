import { useState } from "react";
import "./style.css";

function Card() {
    let [text, setText] = useState();
    const [product, setProduct] = useState([{
        img: "https://img.freepik.com/free-vector/red-leather-sofa-realistic-illustration_1284-12133.jpg?w=900&t=st=1693289070~exp=1693289670~hmac=a13116140791865849e5f4654bf3fa6866d00116948837cc46ee43fd54458898",
        name: "Sofa red",
        price: 5000,
        disp: "Mostly demanding Sofa sets",
    }, {
        img: "https://img.freepik.com/free-photo/gray-sofa-living-room-with-free-space_43614-893.jpg?w=900&t=st=1693289851~exp=1693290451~hmac=7876f1b9a3a5cf873cfc0bba388a2e63f5de9f99f4e3d0f24900a72b70acc762",
        name: "Sofa Grey",
        price: 6000,
        disp: "Mostly demanding Sofa sets",
    }, {
        img: "https://img.freepik.com/free-psd/retro-living-room-interior_53876-109286.jpg?w=996&t=st=1693289886~exp=1693290486~hmac=7078bba02e1830cfd7acd09ae93a673880bb84fde961ecb8973e0b6eb1e6d951",
        name: "Sofa Green",
        price: 7000,
        disp: "Mostly demanding Sofa sets",
    }, {
        img: "https://img.freepik.com/premium-psd/beautiful-interior-design-3d-rendering_345995-167.jpg?w=900",
        name: "Chair Blue",
        price: 2000,
        disp: "Mostly demanding Sofa sets",
    }, {
        img: "https://img.freepik.com/free-photo/minimal-living-room-interior-design-with-leaf-shadow-wall_53876-129802.jpg?w=996&t=st=1693289971~exp=1693290571~hmac=9a4195434416d96bfb0c561647e2e90af4c850f5fded3458bd4de31fd9d36a5d",
        name: "Sofa DarkBlue",
        price: 1000,
        disp: "Mostly demanding Sofa sets",
    }, {
        img: "https://img.freepik.com/premium-photo/ai-generated-photo-golden-lines-green-wallpaper-table-chair-vase-with-minimalist-style_812649-766.jpg?w=740",
        name: "Chair Yellow",
        price: 4500,
        disp: "Mostly demanding Sofa sets",
    }, {
        img: "https://img.freepik.com/premium-psd/isometric-sofa-3d-render_649235-1.jpg?w=996",
        name: "Bed Grey",
        price: 5600,
        disp: "Mostly demanding Sofa sets",
    }, {
        img: "https://img.freepik.com/free-psd/elegant-grey-sofa-with-cushions-isolated_176382-125.jpg?w=1060&t=st=1693290159~exp=1693290759~hmac=2985693e4b79a9b7528258b631af762a56bb0d8a4a275d6dba751a97c4e3f912",
        name: "Bed Grey",
        price: 5800,
        disp: "Mostly demanding Sofa sets",
    }]);


    const filterBySearch = (event) => {
        const q = event.target.value;
        var upPro = [...product];
        upPro = upPro.filter((p) => {
            return p.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        });
        setProduct(upPro);
    };



    return (
        <>
            <div className="text-center p-1" ><input type="text" id="srch" value={text} onChange={filterBySearch} /><button >Search</button></div>
            <div className="container">
                <div className="row">
                    {product.map((product, i) => {
                        return (
                            <div className="card col" key={i}>
                                <img src={product.img} alt="" />
                                <h3>{product.name}</h3>
                                <p>{product.disp}</p>
                                <strong>{product.price}</strong>
                            </div>)
                    })}
                </div>
            </div>
        </>
    )

}
export default Card;