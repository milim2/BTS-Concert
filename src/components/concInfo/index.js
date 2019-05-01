import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const ConcInfo = () => {
   
        return (
            <div className="bck_black">
                <div className="center_wrapper">
                    <div className="cc_wrapper">
                    <Zoom duration={500}>
                        <div className="cc_item">
                            <div className="cc_outer">
                                <div className="cc_inner">
                                    <div className="cc_icon_square bck_yellow"></div> 
                                    <div
                                        className="cc_icon"
                                        style={{
                                            background: `url(${icon_calendar})`
                                        }}
                                    ></div>   
                                    <div className="cc_title">
                                    Concert Date&Time
                                    </div>
                                    <div className="cc_desc">
                                    01 June 2019 @7:30 pm
                                    </div>                            
                                </div>
                            </div>
                        </div>
                        </Zoom>
                        
                        <Zoom duration={500} delay={500}>                    
                        <div className="cc_item">
                            <div className="cc_outer">
                                <div className="cc_inner">
                                    <div className="cc_icon_square bck_red"></div> 
                                    <div
                                        className="cc_icon"
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div>   
                                    <div className="cc_title">
                                      Concert Location
                                    </div>
                                    <div className="cc_desc">
                                    Wembley Stadium, London, GB
                                    </div>                             
                                </div>
                            </div>
                        </div>  
                        </Zoom>

                    </div>
                </div>
                
            </div>
        );
    };

export default ConcInfo;