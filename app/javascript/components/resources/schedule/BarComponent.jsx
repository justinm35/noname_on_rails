import React, { useState } from 'react'
import Draggable from 'react-draggable';

export default SchedulePage = ({colour}) => {
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
    console.log(colour)
    const blockColour = "bg-[" + colour + "]"
    console.log(blockColour)
    return(
        <Draggable axis="x" grid={[20, 20]} >
            <div className={`left-0 top-0 z-50 absolute w-60 h-20 rounded-md ${blockColour} bg-[#786fa6]`}/>
        </Draggable>
    )
}
