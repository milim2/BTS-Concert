import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
                this.setState({
                    discountStart: this.state.discountStart + 1
                })
        }
    }

    componentDidUpdate() {
        setTimeout(()=> {
            this.percentage()
                }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">   

                <Fade
                    onReveal={() => this.percentage()}
                
                >
                <div className="discount_percentage">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>                    
                </div>
                </Fade>             
               
                <Slide right>
                <div className="discount_desc">
                <h3>Purchase tickets before 20th May</h3>
                <p>BTS - Bangtan Boys</p>
                <MyButton 
                    text="Purchase tickets"
                    bck="#ffffff"
                    link="https://www.vividseats.com/concerts/bts-bangtan-boys-tickets/bts-bangtan-boys-wembley-stadium-6-1-3024780.html#showDetails=VB1989614071&qty=0"
                />                              
                </div>
                </Slide>
               
               </div>
               </div>
        );
    }
}

export default Discount;