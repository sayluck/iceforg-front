import { Button, Result } from 'antd';
// @ts-ignore
import { FormattedMessage, formatMessage, Link } from 'umi';
import React from 'react';
import { RouteChildrenProps } from 'react-router';

// @ts-ignore
import styles from './style.less';

const actions = (
  <div className={styles.actions}>
    <Link to="/accountcenter">
      <Button size="large" type="primary">
        <FormattedMessage id='userregister.register-result.account-center' />
      </Button>
    </Link>
    <Link to="/">
      <Button size="large">
        <FormattedMessage id="userregisterresult.register-result.back-home" />
      </Button>
    </Link>
  </div>
);

const UserRegisterResult: React.FC<RouteChildrenProps> = ({ location }) => (
  <Result
    className={styles.registerResult}
    status="success"
    title={
      <div className={styles.title}>
        <FormattedMessage
          id="userregisterresult.register-result.msg"
          values={{ email: location.state ? location.state.account : 'AntDesign@example.com' }}
        />
      </div>
    }
    // subTitle={formatMessage({ id: 'userregisterresult.register-result.activation-email' })}
    extra={actions}
  />
);

export default UserRegisterResult;
