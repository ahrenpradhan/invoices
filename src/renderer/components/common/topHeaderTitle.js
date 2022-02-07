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

export default TopHeaderTitle;
