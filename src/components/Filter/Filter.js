import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label className={s.label}>
            <div className={s.head__field}>Фильтр по имени</div>
            <input
                className={s.input}
                type="text"
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;
