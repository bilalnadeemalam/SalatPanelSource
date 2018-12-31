import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import ClockWidget from './Clockwidget';
import WeatherWidget from './Weatherwidget.js';
import Calculator from './Calculator/Calculator';
import infoBox from './Infobox';
import InfoBoxTest from './Infoboxtest';

//js object containig dummy data 
//manag

function LabelValue(label){
    return label;
}
function TimeValue(time){
    return time;
}
function MessageValue(message){
    return message;
}
function LocationLeft(){
    let left = 4 +'%';    
    return left;
}
function LocationTop(){
    let top = 2 + '%';
    return top;
}

var styletest={
    //backgroundColor: 'lightblue',
    height: '100%'
}
var topRow={
    marginTop: '2%'
}

var emptyRow={
    height:'80px'
}

ReactDOM.render(
        <div>

            <div className="col-md-3 col-sm-3" style={ styletest}>
                <div className="row"><ClockWidget /></div>
                <div className="row"></div>
            </div>
            <div className="col-md-1 col-sm-1" style={ styletest}>
            </div>
            <div className="col-md-9 col-sm-9" style={ styletest}>


                <InfoBoxTest 
                Label={LabelValue('FAJAR')}
                Time={TimeValue('05:00')}
                Message={MessageValue('this is Fajar')}
                LocationLeft={LocationLeft()}
                LocationTop={LocationTop()}
                />
                <InfoBoxTest 
                Label={LabelValue('ZOHAR')}
                Time={TimeValue('13:30')}
                Message={MessageValue('this is Zohar')}
                LocationLeft={LocationLeft()}
                LocationTop={LocationTop()}
                />
                <InfoBoxTest 
                Label={LabelValue('ASAR')}
                Time={TimeValue('17:30')}
                Message={MessageValue('this is Zohar')}
                LocationLeft={LocationLeft()}
                LocationTop={LocationTop()}
                /><InfoBoxTest 
                Label={LabelValue('MAGHRIB')}
                Time={TimeValue('18:30')}
                Message={MessageValue('this is Zohar')}
                LocationLeft={LocationLeft()}
                LocationTop={LocationTop()}
                /><InfoBoxTest 
                Label={LabelValue('ESHA')}
                Time={TimeValue('19:30')}
                Message={MessageValue('this is Zohar')}
                LocationLeft={LocationLeft()}
                LocationTop={LocationTop()}
                />
                <InfoBoxTest 
                Label={LabelValue('SHURAQ')}
                Time={TimeValue('13:30')}
                Message={MessageValue('this is Zohar')}
                LocationLeft={LocationLeft()}
                LocationTop={LocationTop()}
                />
                <InfoBoxTest 
                Label={LabelValue('JUMA')}
                Time={TimeValue('01:30')}
                Message={MessageValue('this is Zohar')}
                LocationLeft={LocationLeft()}
                LocationTop={LocationTop()}
                />
               

            </div>
          
          

                      
        </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
