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

export default ContentWrapper;
