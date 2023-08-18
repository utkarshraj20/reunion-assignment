import { useEffect, useState } from "react";
import PropertyDetails from "./propertydetails";

const Body = () => {

    let data = [
        {
            "id": 1,
            "title": "Modern Studio Apartment",
            "location": "Cityville, United States",
            "type": "Apartment",
            "price": '1200',
            "area": '500',
            "image": "https://example.com/images/apartment1.jpg",
            "available_from": "2023-09-01",
            "contact": {
                "name": "John Doe",
                "email": "johndoe@example.com",
                "phone": "123-456-7890"
            }
        },
        {
            "id": 2,
            "title": "Spacious Family Home",
            "location": "Suburbia, United States",
            "type": "House",
            "price": '2500',
            "area": '1800',
            "image": "https://example.com/images/house1.jpg",
            "available_from": "2023-10-15",
            "contact": {
                "name": "Jane Smith",
                "email": "janesmith@example.com",
                "phone": "987-654-3210"
            }
        },
        {
            "id": 3,
            "title": "Luxury Penthouse",
            "location": "Urbanville, United States",
            "type": "Penthouse",
            "price": '4500',
            "area": '2000',
            "image": "https://example.com/images/penthouse1.jpg",
            "available_from": "2023-09-15",
            "contact": {
                "name": "Michael Johnson",
                "email": "michaeljohnson@example.com",
                "phone": "555-123-4567"
            }
        }
    ];

    let filteredData = data ;

    const [location, setLocation] = useState('null');
    const [type, setType] = useState('null');
    const [price, setPrice] = useState('null');
    const [availableFrom, setAvailablefrom] = useState('null');

    function handleSubmit(e) {
        e.preventDefault() ;
        console.log( "handleSubmit called" ) ;
        filteredData = data.filter(filteringData);
        // console.log(filteredData) ;
    }

    function filteringData(data) {
        if ((data.location === location || location === 'null') && (data.type === type || type === 'null') && (data.price === location || price === 'null') && (data.availableFrom === location || availableFrom === 'null')){
            return data ;
        }
    }

    useEffect(()=>{} , [filteredData]) ;

    return (
        <div>
            <h1>Rent a property</h1>
            <form onSubmit={handleSubmit} >
                <input type="text"
                    name="location"
                    placeholder="location"
                    onChange={(e) => { setLocation(e.target.value) }}
                />
                <input type="text"
                    name="type"
                    placeholder="type"
                    onChange={(e) => { setType(e.target.value) }}
                />
                <input type="text"
                    name="price"
                    placeholder="price upto"
                    onChange={(e) => { setPrice(e.target.value) }}
                />
                <input type="text"
                    name="availableFrom"
                    placeholder="Available From"
                    onChange={(e) => { setAvailablefrom(e.target.value) }}
                />
                <button type="submit" >Filter</button>
            </form>
            { <PropertyDetails data = {filteredData} /> }

        </div>
    );
}

export default Body;