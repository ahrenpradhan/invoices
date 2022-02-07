import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { getObject } from 'renderer/utils/helper';

const { Content } = Layout;

const ContentWrapper = ({ children, wrapperStyle }) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        // margin: '24px 16px',
        margin: '24px 0px',
        padding: 24,
        minHeight: 'calc(100% - 48px)',
        ...getObject(wrapperStyle),
      }}
    >
      {children}
    </Content>
  );
};

ContentWrapper.defaultProps = {
  children: <></>,
  wrapperStyle: {},
};

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.elementType),
    PropTypes.elementType,
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  wrapperStyle: PropTypes.object,
};

export default ContentWrapper;
