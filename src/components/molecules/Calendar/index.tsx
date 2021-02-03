import React from 'react';
import moment, { Moment } from 'moment';
import classnames from 'classnames';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';

import { getMonthData } from '../../../utils/calendar';

import './calendar.scss';

interface ICalendarProps {
    date: Moment;
    weekDayNames: Array<string>;
    onChange: () => void;
}

interface ICalendarState {
    date: Moment;
    currentDate: Moment;
    isShowed: boolean;
}

class Calendar extends React.Component<ICalendarProps, ICalendarState> {
    private monthsData: Array<Array<Moment>>;
    constructor(props: ICalendarProps) {
        super(props);

        this.monthsData = getMonthData(this.props.date);
    }
    static defaultProps = {
        date: moment(),
        weekDayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        onChange: Function.prototype,
    };

    state = {
        date: this.props.date,
        currentDate: moment(),
        isShowed: false,
    };

    get date(): Moment {
        return this.state.date.clone();
    }

    handleLeftMonthClick = (): void => {
        const date = this.date.subtract(1, 'month');

        this.monthsData = getMonthData(date);
        this.setState({ date });
    };

    handleRightMonthClick = (): void => {
        const date = this.date.add(1, 'month');

        this.monthsData = getMonthData(date);
        this.setState({ date });
    };

    handleLeftDayClick = (): void => {
        const date = this.date.subtract(1, 'day');

        this.monthsData = getMonthData(date);
        this.setState({ date });
    };

    handleRightDayClick = (): void => {
        const date = this.date.add(1, 'day');

        this.monthsData = getMonthData(date);
        this.setState({ date });
    };

    handleDayClick = (day: Moment): void => {
        const { onChange } = this.props;

        if (!day.isSame(this.date, 'month')) {
            this.monthsData = getMonthData(day);
        }

        this.setState({ date: day });
        onChange();
    };

    handleTodayClick = () => {
        const { isShowed } = this.state;
        const { currentDate } = this.state;
        this.monthsData = getMonthData(currentDate);
        this.setState({ date: currentDate });
    };

    toggleCalendar = () => {
        this.setState((prevState) => ({
            isShowed: !prevState.isShowed,
        }));
    };

    render() {
        const { weekDayNames } = this.props;
        const { date, currentDate, isShowed } = this.state;

        return (
            <div className={'calendar'}>
                <header className={'calendar__header'}>
                    <button className={'swap-button'} onClick={this.handleLeftDayClick}>
                        <AiOutlineLeft className="icon" />
                    </button>

                    <div className={'selected-date-block'}>
                        <div onClick={this.toggleCalendar}>{date.format('DD MMM')}</div>
                        <BsDot />
                        <div onClick={this.handleTodayClick}>Today</div>
                    </div>

                    <button className={'swap-button'} onClick={this.handleRightDayClick}>
                        <AiOutlineRight className="icon" />
                    </button>
                </header>

                {isShowed ? (
                    <div className={'calendar__main__wrapper'}>
                        <button className={'calendar__main__swipe-month-button'} onClick={this.handleLeftMonthClick}>
                            <AiOutlineLeft className="icon" />
                        </button>
                        <table className={'calendar__main'}>
                            <thead>
                                <tr className={'calendar__main__week-day'}>
                                    {weekDayNames.map((name) => (
                                        <th key={name}>{name}</th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {this.monthsData.map((week, index) => (
                                    <tr key={index} className={'week'}>
                                        {week.map((day: Moment) => (
                                            <td
                                                key={day.valueOf()}
                                                className={classnames('day', {
                                                    today: day.isSame(currentDate, 'days'),
                                                    selected: day.isSame(date, 'days'),
                                                    other: !day.isSame(date, 'month'),
                                                })}
                                                onClick={() => this.handleDayClick(day)}
                                            >
                                                {day.format('DD')}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className={'calendar__main__swipe-month-button'} onClick={this.handleRightMonthClick}>
                            <AiOutlineRight className="icon" />
                        </button>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Calendar;
