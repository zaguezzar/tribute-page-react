import React from 'react'

import Timeline from './Timeline'

import timeLineData from './TimelineData'

class Content extends React.Component {
    render() {
        const timeLine = timeLineData.map(line => {
            return <Timeline key={line.id} year={line.year} text={line.text} />
        }) 
        return (
            <div className="h-full py-10 mx-auto max-w-2xl">
                <div className="text-center text-xl">Here's a time line of Dr.
                Borlaug's life:</div>

                <ul className="list-disc list-inside px-5 mt-12 mb-10 text-lg leading-relaxed">
                    {timeLine}
                </ul>

                <blockquote className="mt-6 italic"
                cite="http://news.rediff.com/report/2009/sep/14/pm-pays-tribute-to-father-of-green-revolution-borlaug.htm">
                    <p class="mx-4 my-3 text-lg">
                    "Borlaug's life and achievement are testimony to the far-reaching
                    contribution that one man's towering intellect, persistence and
                    scientific vision can make to human peace and progress."
                    </p>
                    <cite className="ml-8 text-lg">-- Indian Prime Minister Manmohan Singh</cite>
                </blockquote>
            </div>
        )
    }
}

export default Content