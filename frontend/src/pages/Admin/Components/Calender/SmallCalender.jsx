import { useState } from "react";
import mod from "./__index.module.scss";

const SmallCalender = ({ viewMonth = true }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Month name (January, February, ...)
  const monthName = currentDate.toLocaleString("default", { month: "long" });

  // Days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // First day of month (0 = Sunday)
  const firstDay = new Date(year, month, 1).getDay();

  const today = new Date();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className={mod.smallcalenderfull}>
      {viewMonth && (
        <div className={mod.smallcalenderheader}>
          <button onClick={prevMonth} className={mod.smallcalender_left}>
            <i className="mdi mdi-chevron-left" />
          </button>

          <span className={mod.name}>
            {monthName} {year}
          </span>

          <button onClick={nextMonth} className={mod.smallcalender_right}>
            <i className="mdi mdi-chevron-right" />
          </button>
        </div>
      )}

      {/* Weekdays */}
      <div className={mod.weekdays}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className={mod.weekday}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar body */}
      <div className={mod.smallcalenderbody}>
        {/* Empty cells before month start */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className={mod.empty} />
        ))}

        {/* Days */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={day}
              className={`${mod.day} ${isToday ? mod.today : ""}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmallCalender;
