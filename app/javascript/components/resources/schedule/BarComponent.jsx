import React, { useState } from 'react'
import Draggable from 'react-draggable';

export default SchedulePage = ({colour, spacingLeft, duration}) => {
    // onStop = () => {
    //     this.setState({activeDrags: --this.state.activeDrags});
    //   };
    // onControlledDrag = (e, position) => {
    //     const {x, y} = position;
    //     this.setState({controlledPosition: {x, y}});
    //   };
    // onControlledDragStop = (e, position) => {
    //     this.onControlledDrag(e, position);
    //     this.onStop();
    //   };
    // onStop={this.onControlledDragStop}
    const blockColour = "bg-[" + colour + "]"

    return(//bg-[#e66767] or bg-[#786fa6]
        <Draggable axis="x" grid={[20, 20]} >
            {/* <div style={{marginLeft: spacingLeft}}/> */}
            <div style={{marginLeft: spacingLeft, width: duration}} className={`left-0 top-0 z-50 absolute h-20 rounded-md ${blockColour}`}/>
        </Draggable>
    )
}
