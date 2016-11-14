import React, { PropTypes as T } from 'react'
import {connect } from 'react-redux';
import Header from 'components/Header/Header'
import Loading from 'components/Loading'
import styles from './styles.module.css'

class Container extends React.Component {
  renderChildren() {
    const childProps = {
      ...this.props
    };
    const {children} = this.props;
    return React.Children.map(children,
              c => React.cloneElement(c, childProps));
  }
  render() {
    const {isFetching} = this.props;
    return (
      <div className={styles.wrapper}>
        <Header tite="play" />
        <div className={styles.content}>
          {this.renderChildren()}
        </div>
        <Loading {...isFetching}/>
      </div>
    )
  }
}

Container.contextTypes = {
  router: T.object
}

const mapStateToProps = (state) => ({
  isFetching: state.global
});

export default connect(mapStateToProps, undefined) (Container);

