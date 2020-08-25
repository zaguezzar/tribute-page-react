import React from 'react'

import Header from './Header'

import Image from './Image'

import Content from './Content'

import Footer from './Footer'

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Image />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default App