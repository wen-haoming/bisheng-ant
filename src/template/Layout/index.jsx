// import LogRocket from 'logrocket';
// import setupLogRocketReact from 'logrocket-react';
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import 'moment/locale/zh-cn';

import Header from './Header';
import enLocale from '../../en-US';
import cnLocale from '../../zh-CN';
import * as utils from '../utils';

if (typeof window !== 'undefined' && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => registration.unregister());
  });
}

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('../../static/style');

  // Expose to iframe
  window.react = React;
  window['react-dom'] = ReactDOM;
  // eslint-disable-next-line global-require
  window.antd = require('antd');

  // Error log statistic
  window.addEventListener('error', function onError(e) {
    // Ignore ResizeObserver error
    if (e.message === 'ResizeObserver loop limit exceeded') {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  });

  if (process.env.NODE_ENV === 'production') {
    // LogRocket.init('kpuw4z/ant-design');
    // setupLogRocketReact(LogRocket);
  }
}

let isMobile = false;


export default class Layout extends React.Component {


  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const appLocale = utils.isZhCN(pathname) ? cnLocale : enLocale;

    this.state = {
      appLocale,
      isMobile,
    };
  }

  getChildContext() {
    const { isMobile: mobile } = this.state;
    return { isMobile: mobile };
  }

  componentDidMount() {
    const { router } = this.props;
    router.listen(loc => {
      if (typeof window.ga !== 'undefined') {
        window.ga('send', 'pageview', loc.pathname + loc.search);
      }
      // eslint-disable-next-line
      if (typeof window._hmt !== 'undefined') {
        // eslint-disable-next-line
        window._hmt.push(['_trackPageview', loc.pathname + loc.search]);
      }
    });

    const nprogressHiddenStyle = document.getElementById('nprogress-style');
    if (nprogressHiddenStyle) {
      this.timer = setTimeout(() => {
        nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
      }, 0);
    }


  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { children, helmetContext = {}, ...restProps } = this.props;
    const { appLocale } = this.state;
    console.log(helmetContext,'--')
    return (

      <HelmetProvider context={helmetContext}>
        <Helmet encodeSpecialCharacters={false}>
          <html lang={appLocale.locale === 'zh-CN' ? 'zh' : 'en'} />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
          />
        </Helmet>
        <IntlProvider locale={appLocale.locale} messages={appLocale.messages} defaultLocale="zh-CN">
            <div className="page-wrapper">
              <Header {...restProps} />
              {children}
            </div>
        </IntlProvider>
      </HelmetProvider>
    );
  }
}
