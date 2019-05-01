import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';


class TimeUntil extends Component {

    state = {
        deadline: 'Jun, 01, 2019',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        //console.log(time);
        if(time < 0) {
            console.log('Date passed')
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            console.log(seconds);

            this.setState({
                days:days,
                hours:hours,
                minutes:minutes,
                seconds:seconds
            })
        }
    }

    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
    //  이 안에서 다른 JavaScript 프레임워크를 연동하거나,
    // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.   
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000)
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.days}
                            </div>
                            <div className="countdown_tag">
                                Days
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.hours}
                            </div>
                            <div className="countdown_tag">
                                Hs
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.minutes}
                            </div>
                            <div className="countdown_tag">
                                Min
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.seconds}
                            </div>
                            <div className="countdown_tag">
                                Sec
                        </div>
                        </div>
                    </div>
                </div>

            </Slide>
        );
    }
}

export default TimeUntil;


