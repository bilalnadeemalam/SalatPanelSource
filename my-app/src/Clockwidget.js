import React,{Component} from 'react';


class ClockWidget extends Component{


    constructor(props){
        super(props);
        this.state={
            currentTIme: new Date().toLocaleTimeString('it-it'),
            getHour: new Date().getHours(),
            getMinute: new Date().getMinutes(),
            dayNumber: new Date().getDay().toLocaleString(),
            dayName: 'Monday',
            date: new Date().getDate(),
            month: new Date().toLocaleString('en-us', {month: 'long'})
            
        }
        this.updateCurrentTime();
        this.dayChecker();

    }

    timeContainer={
        //position: 'fixed',
        left: '3px',
        top: '30px',
        fontFamily: 'Amiri'
        
    }

    customCLockStyle={
       fontSize: '122px',
       fontFamily: 'Amiri',
       display: 'inline',
       marginLeft: '25px' 
    }
    customDayStyle={
       fontSize: '36px', 
       marginLeft: '30px',
       display: 'inline'
    }

    CustomDateStyle={
       fontSize: '36px', 
       marginLeft: '30px',
       display: 'inline'
    }

    updateCurrentTime(){
        
        setInterval(()=>{
            this.setState({
                currentTIme: new Date().toLocaleTimeString('it-it'),
                getHour: new Date().getHours(),
                getMinute: new Date().getMinutes(),
                dayNumber: new Date().getDay().toLocaleString(),
                month: new Date().toLocaleString('en-us', {month: 'long'})
            })
        }
        ,1000)
    }

    dayChecker(){
        if(this.state.dayNumber==1){
            setInterval(()=>{
                this.setState({
                    dayName: 'Monday'
                })
            },1000)
        }
        else if(this.state.dayNumber==2){
            setInterval(()=>{
                this.setState({
                    dayName: 'Tuesday'
                })
            },1000)
        }
        else if(this.state.dayNumber==3){
            setInterval(()=>{
                this.setState({
                    dayName: 'Wednesday'
                })
            },1000)
        }
        else if(this.state.dayNumber==4){
            setInterval(()=>{
                this.setState({
                    dayName: 'Thursday'
                })
            },1000)
        }
        else if(this.state.dayNumber==5){
            setInterval(()=>{
                this.setState({
                    dayName: 'Friday'
                })
            },1000)
        }
        else if(this.state.dayNumber==6){
            setInterval(()=>{
                this.setState({
                    dayName: 'Saturday'
                })
            },1000)
        }
        else if(this.state.dayNumber==7){
            setInterval(()=>{
                this.setState({
                    dayName: 'Sunday'
                })
            },1000)
        }
    }

    


    render(){
        return(
            <div style={this.timeContainer}>
                <div >
                    <p style={this.customCLockStyle}>{this.state.getHour}:{this.state.getMinute}</p>
                </div>
                <div>
                    <p style={this.customDayStyle}>{this.state.dayName}</p>
                </div>
                <div>
                    <p style={this.customDayStyle}>{this.state.month} {this.state.date}</p>
                </div>
            </div>
        );
    }
}
export default ClockWidget;