import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="flex flex-col py-10">
                <div id="title" className="mx-auto my-4 text-4xl">Dr. Norman Borlaug</div>
                <div id="subtitle" className="mx-auto my-2 text-xl">The man who saved a billion lives</div>
            </div>
        )
    }
}

export default Header