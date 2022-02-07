/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { getObject } from 'renderer/utils/helper';

const TopHeaderTitle = ({ title, wrapperStyle = {}, textStyle = {} }) => {
  return (
    <div
      style={{
        ...getObject(wrapperStyle),
      }}
    >
      <span
        style={{
          fontSize: '22px',
          fontWeight: '600',
          letterSpacing: '1px',
          ...getObject(textStyle),
        }}
      >
        {title || 'No title provided'}
      </span>
    </div>
  );
};

TopHeaderTitle.defaultProps = {
  title: '',
  wrapperStyle: {},
  textStyle: {},
};

TopHeaderTitle.propTypes = {
  title: PropTypes.string,
  wrapperStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default TopHeaderTitle;
