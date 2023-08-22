import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import React from 'react'

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


    return(
        <div className="flex h-full p-10">
            <div className="h-11/12 flex">
                    <ul className="w-24 text-neutral-700 text-[14px] font-medium">
                        <li className="flex h-20">
                        </li>
                        <li className="flex h-20">
                            <p>Machine A</p>
                        </li>
                        <li className="flex h-20">
                            <p>Machine A</p>
                        </li>
                    </ul>
                </div>
            <div className="overflow-auto flex h-full">
            {daysArray.map((day) => {
                return(
                    <div key={JSON.stringify(day)} className="h-full">
                        <div className="text-neutral-400 text-[10px] font-poppins font-medium text-center">
                            <p className="pb-1">{format(day, 'MMM dd')}</p>
                            <p className="font-light">{format(day, 'EEE')}</p>
                        </div>
                        <div className="border-l border-x-zinc-300 h-full w-20 border-dashed">
                            {}
                        </div>
                    </div>
                )
            })}

        </div>
        </div>
    )
}
