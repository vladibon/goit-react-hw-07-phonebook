import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
import s from './Filter.module.scss';

function Filter({ labelName }) {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.field}>
      <span className={s.label}>{labelName}</span>
      <input
        className={s.input}
        type='text'
        name='filter'
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}

Filter.propTypes = {
  labelName: PropTypes.string.isRequired,
};

export default Filter;
