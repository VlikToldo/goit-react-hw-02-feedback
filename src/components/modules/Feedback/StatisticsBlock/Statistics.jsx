import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

// import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    if (!total) {
        return <Notification message="There is no feedback"/>
    }

        return (
            <>
                <p className="">Good: {good}</p>
                <p className="">Neutral: {neutral}</p>
                <p className="">Bad: {bad}</p>
                <p className="">Total: {total}</p>
                <p className="">
                    Positive Feedback: {positivePercentage} %
                </p>
            </>
        );
    }


export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.func.isRequired
}
