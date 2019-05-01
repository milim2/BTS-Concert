import React, { Component } from 'react';

class index extends Component {

    state = {
        prices:[100, 150, 200],
        positions:['Balcony', 'Medium', 'Star'],
        desc: [
            'Seats directly across from the stage provide the most comfortable looks of the performance. Even upper level sections offer unobstructed sitelines. Just keep in mind that you wont be able to see as much detail from these seats as you would if you sat closer to the stage.',
            'offer some of the closest views of the performers. For many concerts, floor sections are added or removed. These performer-specific adjustments may alter the floor layout and the views from each floor sectio',
            'The view is not head-on like on the floor, but many of the seats are closer to the stage, provide better elevation and are actual stadium seats.'
        ],
        linkto:['http://sales/b', 'http://sales/m', 'http://sales/s' ]
    }

    showBoxes = () => (
        this.state.prices.map((box, i)=>(
            <div className="pricing_item">
            <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                    <span>${this.state.prices[i]}</span>
                </div>
                <div className="pricing_description">
                    description
                </div>
                <div className="pricing_buttons">
                    button
                </div>
            </div>

            </div>

        ))
        )
    
    render() {
        return (
            <div className="bck_black">
            <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    {this.showBoxes}
                    </div>                
            </div>
            </div>
        );
    }
}

export default index;
