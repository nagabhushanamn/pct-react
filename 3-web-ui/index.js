
console.log('-index.js-')


//--------------------------------------------------------------
// way-1 : plain-js
//--------------------------------------------------------------
let inClockV1Ele = document.getElementById('asia_kolkata_v1');
let dubaiClockV1Ele = document.getElementById('asia_dubai_v1');
let usClockV1Ele = document.getElementById('america_newyork_v1');


function Clock(props) {
    let timeZone = props.timeZone;
    return `
    <div class="card">
        <div class="card-header">${timeZone}</div>
        <div class="card-body">
            <span class="badge badge-dark">
                ${new Date().toLocaleTimeString('en-US', { timeZone: timeZone })}
            </span>
        </div>
    </div>
    `;
}

setInterval(() => {
    inClockV1Ele.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
    dubaiClockV1Ele.innerHTML = Clock({ timeZone: 'Asia/Dubai' })
    usClockV1Ele.innerHTML = Clock({ timeZone: 'America/New_york' })
}, 1000);



//--------------------------------------------------------------
// way-2 : react.js
//--------------------------------------------------------------

let inClockV2Ele = document.getElementById('asia_kolkata_v2');
let dubaiClockV2Ele = document.getElementById('asia_dubai_v2');
let usClockV2Ele = document.getElementById('america_newyork_v2');

// //
// function NewClock(props) {
//     let timeZone = props.timeZone;
//     let div1Ele = React.createElement('div', { className: 'card-header' }, timeZone)
//     let spanEle = React.createElement('span', { className: 'badge badge-dark' }, new Date().toLocaleTimeString('en-US', { timeZone: timeZone }))
//     let div2Ele = React.createElement('div', { className: 'card-body' }, spanEle)
//     let div = React.createElement('div', { className: 'card' }, div1Ele, div2Ele)
//     return div
// }


// setInterval(() => {
//     ReactDOM.render(NewClock({ timeZone: 'Asia/Kolkata' }), inClockV2Ele)
//     ReactDOM.render(NewClock({ timeZone: 'Asia/Dubai' }), dubaiClockV2Ele)
//     ReactDOM.render(NewClock({ timeZone: 'America/New_york' }), usClockV2Ele)
// }, 1000);

//  JSX syntax
function NewClock(props) {
    let timeZone = props.timeZone;
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge badge-dark">
                    {new Date().toLocaleTimeString('en-US', { timeZone: timeZone })}
                </span>
            </div>
        </div>
    )
}


setInterval(() => {
    ReactDOM.render(<NewClock timeZone='Asia/Kolkata' />, inClockV2Ele)
    ReactDOM.render(<NewClock timeZone='Asia/Dubai' />, dubaiClockV2Ele)
    ReactDOM.render(<NewClock timeZone='America/New_york' />, usClockV2Ele)
}, 1000);
