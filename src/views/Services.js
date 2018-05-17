import React from 'react';
import styled from 'styled-components'
import RouteHeader from '../components/RouteHeader'
import Information from '../components/Information'
import ladyAtDealerImage from '../assets/images/seb-p34k-hamel-71515-unsplash.jpg'
import oldCarImage from '../assets/images/severin-dm-361920-unsplash.jpg'

const serviceArray = [
  {header: "Sales", text: "We always maintain a small inventory of select special intrest autos for enthusiasts. We have a great many intrests and our selection of cars are a great representation of that. From BMW to Honda follow us on your favorite social media channel to stay informed of our current inventory",
    image: ladyAtDealerImage },
  {header: "Car Search", text: "Do you have a specific car in mind? We can locate any particular year, make, model, trim, and desired mileage from sources nationwide. Why settle for something that is just good enough when you can drive the car you really want at a great price.",
    image: oldCarImage}
]
const Services = (props) => (
  <div>
    <RouteHeader header="Services" />
  <Information data={serviceArray} />
  </div>
);

export default Services;
