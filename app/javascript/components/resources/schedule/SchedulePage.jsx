import { differenceInDays, eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import React, { useState } from 'react'
import Draggable from 'react-draggable';
import BarComponent from './BarComponent';
import ResourceListComponent from './ResourceListComponent';
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
        <div className="h-full px-10">
            <div class="inline-flex rounded-md shadow-sm ml-28 mb-8" role="group">
                <button type="button" class="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                    Days
                </button>
                <button type="button" class="px-4 py-2 text-xs font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                    Weeks
                </button>
                <button type="button" class="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                    Months
                </button>
            </div>
            <div className="flex h-full">
                <ResourceListComponent/>
                <div className="overflow-auto flex relative">
                    {/* Plots the bars */}
                    <div className="absolute h-2/3 w-full top-0 left-0 ">
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
                            <div key={JSON.stringify(day)} className="h-3/6">
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
        </div>
    )
}
