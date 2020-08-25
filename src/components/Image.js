import React from 'react'

class Image extends React.Component {
    render() {
        return (
            <div className="mx-3 px-3 py-2 bg-white">
                <img src="https://c2.staticflickr.com/4/3689/10613180113_fdf7bcd316_b.jpg" className="mx-auto" alt="Dr. Norman Borlaug and biologists."></img>
                <div id="img-caption" className="my-2 mx-2 text-center leading-relaxed">Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger.</div>
            </div>
        )
    }
}

export default Image