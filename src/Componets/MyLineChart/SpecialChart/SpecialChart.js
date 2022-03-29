import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SpecialChart = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => phone.slug);
                console.log(phoneData)

            })
    })
    return (
        <div>

        </div>
    );
};

export default SpecialChart;