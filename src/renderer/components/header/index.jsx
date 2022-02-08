import PropTypes from 'prop-types';
import { Button } from 'antd';

import TopHeaderTitle from 'renderer/components/common/topHeaderTitle';

const HeaderComponent = ({ title, headerConfig }) => {
  const headerConfigList = Object.keys(headerConfig);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <TopHeaderTitle title={title} />
      {headerConfigList.length && (
        <div style={{ display: 'flex' }}>
          {headerConfigList.map((_) => (
            <Button
              key={headerConfig[_]?.key || headerConfig[_]}
              onClick={headerConfig[_]?.onClick || undefined}
              style={{
                marginRight: '1em',
                alignSelf: 'center',
                ...(_?.style || {}),
              }}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...(headerConfig[_]?.customProps || {})}
            >
              {headerConfig[_]?.title ||
                headerConfig[_]?.key ||
                headerConfig[_]}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

HeaderComponent.defaultProps = {
  // title:'',
  headerConfig: {},
};
HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  headerConfig: PropTypes.object,
};

export default HeaderComponent;
