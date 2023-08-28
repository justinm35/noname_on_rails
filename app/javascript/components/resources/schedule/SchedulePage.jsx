import { differenceInDays, eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import React, { useState } from 'react'
import Draggable from 'react-draggable';
import BarComponent from './BarComponent';
const generateDaysInMonth = (date) => {
    const firstDayOfMonth = startOfMonth(date);
    const lastDayOfMonth = endOfMonth(date)

    return eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    })
}

export default SchedulePage = () => {
const date = new Date(2023, 8, 20)
const daysArray = generateDaysInMonth(date)

const [posState, setPosState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  })
onStart = () => {
    setPosState({...posState, activeDrags: ++posState.activeDrags});
  };

  onStop = () => {
    setPosState({...posState, activeDrags: --posState.activeDrags});
    // this.setState({activeDrags: --this.state.activeDrags});
  };
    const blockStartDate = new Date("2023/09/10")
    const blockEndDate = new Date("2023/09/15")
    const dragHandlers = {onStart: onStart, onStop: onStop};
    const allBookings = [{startDate: new Date("2023/09/10"), endDate: new Date("2023/09/15")},
                        {startDate: new Date("2023/09/20"), endDate: new Date("2023/09/23")}]
    return(
        <div className="flex h-full p-10">
                <div className="h-11/12 flex">
                    <ul className="w-28 text-neutral-700 text-[14px] font-medium">
                        <li className="flex h-10">
                        </li>
                        <li className="flex m-4 h-20 items-center">
                            <p>Machine A</p>
                        </li>
                        <li className="flex m-4 h-20 items-center">
                            <p>Machine A</p>
                        </li>
                    </ul>
                </div>
            <div className="overflow-auto flex h-full relative">
                {/* Plots the bars */}
                <div className="absolute h-5/6 w-full top-0 left-0 ">
                    <ul className="">
                        <li className="h-10 relative">

                        </li>
                        <li className="h-20 my-4 relative">
                            {/* map the bars */}
                            {allBookings.map((booking) => {
                                const distanceToStart = differenceInDays(booking.startDate, daysArray[0])
                                const numberOfDays = differenceInDays(booking.endDate, booking.startDate) + 1
                                return (
                                    <BarComponent key={distanceToStart} style="background-color:red" colour="#786fa6" duration={numberOfDays * 80} spacingLeft={distanceToStart * 80}/>
                                    )
                            })}
                        </li>
                        <li className="h-20 my-4 relative">
                            <BarComponent colour="#e66767"/>
                        </li>
                        <li className="h-20 my-4 relative"></li>
                    </ul>
                </div>

                {daysArray.map((day) => { //Creates each Column
                    return(
                        <div key={JSON.stringify(day)} className="h-5/6">
                            <div className="text-neutral-400 text-[10px] font-poppins font-medium text-center h-10">
                                <p className="pb-1">{format(day, 'MMM dd')}</p>
                                <p className="font-light">{format(day, 'EEE')}</p>
                            </div>
                            <div className="relative border-l border-x-zinc-300 h-full w-[80px] border-dashed">
                            {/* {day.toString() === blockStartDate.toString() && <BarComponent/>} */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
