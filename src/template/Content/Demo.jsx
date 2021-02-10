/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import CopyToClipboard from 'react-copy-to-clipboard';
import classNames from 'classnames';
import { Icon, Tooltip } from 'antd';
import ErrorBoundary from './ErrorBoundary';
import BrowserFrame from '../BrowserFrame';



class Demo extends React.Component {
  state = {
    codeExpand: false,
    copied: false,
    copyTooltipVisible: false,
  };

  componentDidMount() {
    const { meta, location } = this.props;
    if (meta.id === location.hash.slice(1)) {
      this.anchor.click();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { codeExpand, copied, copyTooltipVisible } = this.state;
    const { expand } = this.props;
    return (
      (codeExpand || expand) !== (nextState.codeExpand || nextProps.expand) ||
      copied !== nextState.copied ||
      copyTooltipVisible !== nextState.copyTooltipVisible
    );
  }

  getSourceCode() {
    const { highlightedCode } = this.props;
    if (typeof document !== 'undefined') {
      const div = document.createElement('div');
      div.innerHTML = highlightedCode[1].highlighted;
      return div.textContent;
    }
    return '';
  }

  handleCodeExpand = demo => {
    const { codeExpand } = this.state;
    this.setState({ codeExpand: !codeExpand });
    this.track({
      type: 'expand',
      demo,
    });
  };

  handleCodeCopied = demo => {
    this.setState({ copied: true });
    this.track({
      type: 'copy',
      demo,
    });
  };

  onCopyTooltipVisibleChange = visible => {
    if (visible) {
      this.setState({
        copyTooltipVisible: visible,
        copied: false,
      });
      return;
    }
    this.setState({
      copyTooltipVisible: visible,
    });
  };

  // eslint-disable-next-line
  track({ type, demo }) {
    if (!window.gtag) {
      return;
    }
    window.gtag('event', 'demo', {
      event_category: type,
      event_label: demo,
    });
  }

  render() {
    const {
      meta,
      src,
      content,
      preview,
      highlightedCode,
      style,
      highlightedStyle,
      expand,
      utils,
      intl: { locale },
    } = this.props;
    const { copied, copyTooltipVisible } = this.state;
    if (!this.liveDemo) {
      this.liveDemo = meta.iframe ? (
        <BrowserFrame>
          <iframe src={src} height={meta.iframe} title="demo" />
        </BrowserFrame>
      ) : (
        preview(React, ReactDOM)
      );
    }

    const codeExpand = this.state.codeExpand || expand;
    const codeBoxClass = classNames('code-box', {
      expand: codeExpand,
      'code-box-debug': meta.debug,
    });
    const localizeIntro = content[locale] || content;
    const introChildren = utils.toReactComponent(['div'].concat(localizeIntro));

    const highlightClass = classNames({
      'highlight-wrapper': true,
      'highlight-wrapper-expand': codeExpand,
    });

    const sourceCode = this.getSourceCode();

    return (
      <section className={codeBoxClass} id={meta.id}>
        <section className="code-box-demo">
          <ErrorBoundary>{this.liveDemo}</ErrorBoundary>
          {style ? (
            <style dangerouslySetInnerHTML={{ __html: style }} /> // eslint-disable-line
          ) : null}
        </section>
        <section className="code-box-meta markdown">
          <div className="code-box-description">{introChildren}</div>
          <div className="code-box-actions">
            <CopyToClipboard text={sourceCode} onCopy={() => this.handleCodeCopied(meta.id)}>
              <Tooltip
                visible={copyTooltipVisible}
                onVisibleChange={this.onCopyTooltipVisibleChange}
                title={<FormattedMessage id={`app.demo.${copied ? 'copied' : 'copy'}`} />}
              >
                <Icon
                  type={copied && copyTooltipVisible ? 'check' : 'snippets'}
                  className="code-box-code-copy"
                />
              </Tooltip>
            </CopyToClipboard>
            <Tooltip
              title={<FormattedMessage id={`app.demo.code.${codeExpand ? 'hide' : 'show'}`} />}
            >
              <span className="code-expand-icon">
                <img
                  alt="expand code"
                  src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
                  className={codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show'}
                  onClick={() => this.handleCodeExpand(meta.id)}
                />
                <img
                  alt="expand code"
                  src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
                  className={codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide'}
                  onClick={() => this.handleCodeExpand(meta.id)}
                />
              </span>
            </Tooltip>
          </div>
        </section>
        <section className={highlightClass} key="code">
          <div className="highlight">{utils.toReactComponent(highlightedCode)}</div>
          {highlightedStyle ? (
            <div key="style" className="highlight">
              <pre>
                <code className="css" dangerouslySetInnerHTML={{ __html: highlightedStyle }} />
              </pre>
            </div>
          ) : null}
        </section>
      </section>
    );
  }
}

export default injectIntl(Demo);
