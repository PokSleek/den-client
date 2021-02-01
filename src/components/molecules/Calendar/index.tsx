import React from 'react';
import moment, { Moment } from 'moment';
import classnames from 'classnames';

import { getMonthData } from '../../../utils/calendar';

import './calendar.scss';

interface ICalendarProps {
    date: Moment;
    years: Array<number>;
    monthsNames: Array<string>;
    weekDayNames: Array<string>;
    onChange: () => void;
}

interface ICalendarState {
    date: Moment;
    currentDate: Moment;
    selectedDate: Moment | null;
}

class Calendar extends React.Component<ICalendarProps, ICalendarState> {
    private monthsData: Array<Array<Moment>>;
    private monthSelect: HTMLSelectElement;
    private yearSelect: HTMLSelectElement;
    constructor(props: ICalendarProps) {
        super(props);

        this.monthsData = getMonthData(this.props.date);
    }
    static defaultProps = {
        date: moment(),
        years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        monthsNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekDayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        onChange: Function.prototype,
    };

    state = {
        date: this.props.date,
        currentDate: moment(),
        selectedDate: null,
    };

    get date(): Moment {
        return this.state.date.clone();
    }

    get year(): number {
        return this.state.date.year();
    }

    get month(): number {
        return this.state.date.month();
    }

    get day(): number {
        return this.state.date.day();
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

    handleSelectChange = (): void => {
        const month = this.monthSelect.value;
        const year = this.yearSelect.value;

        const date = moment([year, month]);

        this.monthsData = getMonthData(date);
        this.setState({ date });
    };

    handleDayClick = (day: Moment): void => {
        const { onChange } = this.props;

        this.setState({ selectedDate: day });
        onChange();
    };

    render() {
        const { weekDayNames, monthsNames, years } = this.props;
        const { date, currentDate, selectedDate } = this.state;

        return (
            <div className={'calendar'}>
                <header>
                    <button onClick={this.handleLeftMonthClick}>{'<'}</button>

                    <select
                        value={this.month}
                        ref={(element) => (this.monthSelect = element)}
                        onChange={this.handleSelectChange}
                    >
                        {monthsNames.map((month, index) => (
                            <option key={month} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>

                    <select
                        value={this.year}
                        ref={(element) => (this.yearSelect = element)}
                        onChange={this.handleSelectChange}
                    >
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>

                    <button onClick={this.handleRightMonthClick}>{'>'}</button>
                </header>

                <table>
                    <thead>
                        <tr>
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
                                            selected: day.isSame(selectedDate, 'days'),
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
            </div>
        );
    }
}

export default Calendar;
