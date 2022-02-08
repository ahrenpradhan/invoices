import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { scroll as scrollReducer } from 'renderer/appRedux/slices/appConfigSlice';

import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import HeaderRoutes from 'renderer/routes/headerRoutes';

const { Header } = Layout;

const MainHeader = ({ collapsed = false, handleToggle = () => {} }) => {
  const scroll = useSelector((state) => state.appConfig.scroll);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      dispatch(
        scrollReducer({
          actionType: 'UPDATE_SCROLL_DATA',
          data: {
            y: window.pageYOffset,
            x: window.pageXOffset,
          },
        })
      );
    };

    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        position: 'sticky',
        top: '0',
        zIndex: '10',
        display: 'flex',
        transition: 'all 300ms ease-in-out',
        ...(scroll.y === 0
          ? {
              borderBottom: '1px solid #fff',
            }
          : {
              borderBottom: '1px solid #e3e3e3',
            }),
      }}
    >
      <div>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: handleToggle,
          }
        )}
      </div>
      <div style={{ flex: 1, justifyContent: 'space-between' }}>
        <HeaderRoutes />
      </div>
    </Header>
  );
};

MainHeader.defaultProps = {
  collapsed: false,
  handleToggle: () => {},
};

MainHeader.propTypes = {
  collapsed: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default MainHeader;
