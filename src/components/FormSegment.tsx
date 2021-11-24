import './FormSegment.css'
import React from 'react';

export type FormSegmentProps = {
    number: number;
    headerText: string;
}

export class FormSegment extends React.Component<FormSegmentProps> {
    render() {
        return (
            <div className='def-grid'>
                <div className='grid-bullet'>{this.props.number}</div>
                <div className='grid-header'><h2>{this.props.headerText}</h2></div>
                <div className='grid-main'>
                    <div className='fs-content'>{this.props.children}</div>
                </div>
            </div>
        )
    }
}