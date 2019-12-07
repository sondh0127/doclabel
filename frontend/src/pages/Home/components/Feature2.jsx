import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { HomeContext } from './HomeContext';

function Content2(props) {
  const { isMobile, isDark } = React.useContext(HomeContext);
  const { ...tagProps } = props;
  const { dataSource } = tagProps;
  delete tagProps.dataSource;

  const animType = {
    queue: isMobile ? 'bottom' : 'left',
    one: isMobile
      ? {
          scaleY: '+=0.3',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        }
      : {
          x: '+=30',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        },
  };
  const img = (
    <TweenOne
      key="img"
      animation={animType.one}
      resetStyle
      {...dataSource.imgWrapper}
      component={Col}
      componentProps={{
        md: dataSource.imgWrapper.md,
        xs: dataSource.imgWrapper.xs,
      }}
    >
      <span {...dataSource.img}>
        <img src={dataSource.img.children} width="100%" alt="img" />
      </span>
    </TweenOne>
  );
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        {isMobile && img}
        <QueueAnim
          type={animType.queue}
          key="text"
          leaveReverse
          ease={['easeOutCubic', 'easeInCubic']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            md: dataSource.textWrapper.md,
            xs: dataSource.textWrapper.xs,
          }}
        >
          <h2 key="h1" {...dataSource.title}>
            {dataSource.title.children}
          </h2>
          <div key="p" {...dataSource.content}>
            {dataSource.content.children}
          </div>
        </QueueAnim>
        {!isMobile && img}
      </OverPack>
    </div>
  );
}

export default React.memo(Content2);
