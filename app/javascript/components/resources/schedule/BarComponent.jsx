import React, { useState } from 'react'
import Draggable from 'react-draggable';

export default SchedulePage = ({colour, spacingLeft, duration}) => {
    const [posState, setPosState] = useState()
    const onControlledDrag = (e, position) => {
        const {x, y} = position;
        setPosState({x, y})
      };
      console.log(posState)
    // for tailwindcss compiler bg-[#e66767] or bg-[#786fa6] or border-[#e66767] or  border-[#786fa6]
    const blockColour = "bg-[" + colour + "]"
    const borderColour = "border-[" + colour + "]"

    return(
        <Draggable axis="x" grid={[20, 20]} onDrag={onControlledDrag} >
            {/* <div style={{marginLeft: spacingLeft}}/> */}
            <div style={{marginLeft: spacingLeft, width: duration}} className={`active:cursor-grabbing hover:cursor-pointer left-0 top-0 z-50 absolute h-20 rounded-md border-2 ${borderColour} shadow-lg ${blockColour} opacity-75`}/>
        </Draggable>
    )
}
