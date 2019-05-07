import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class index extends Component {

    state = {
        prices:[117, 149, 206],
        positions:['Balcony', 'Medium', 'Star'],
        desc: [
            'Seats directly across from the stage provide the most comfortable looks of the performance. Even upper level sections offer unobstructed',
            'offer some of the closest views of the performers. For many concerts, floor sections are added or removed. These performer-specific adjustments',
            'The view is not head-on like on the floor, but many of the seats are closer to the stage, provide better elevation and are actual stadium seats.'
        ],
        linkto:['https://www.vividseats.com/concerts/bts-bangtan-boys-tickets/bts-bangtan-boys-wembley-stadium-6-1-3024780.html', 
         'https://www.vividseats.com/concerts/bts-bangtan-boys-tickets/bts-bangtan-boys-wembley-stadium-6-1-3024780.html',
         'https://www.vividseats.com/concerts/bts-bangtan-boys-tickets/bts-bangtan-boys-wembley-stadium-6-1-3024780.html' ],
        delay:[500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
            <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                    <span>${this.state.prices[i]}</span>
                    <span>{this.state.positions[i]}</span>
                </div>
                <div className="pricing_description">
                    {this.state.desc[i]}
                </div>
                <div className="pricing_buttons">
                    <MyButton 
                        text="Purchase"
                        bck="ffa800"
                        color="#ffffff"
                        link={this.state.linkto[i]}

                    />
                </div>
            </div>
            </div>
            </Zoom>            
        ))
        )
    
    render() {
        return (
            <div className="bck_black">
            <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    {this.showBoxes()}
                    </div>                
            </div>
            </div>
        );
    }
}

export default index;
