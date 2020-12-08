import * as React from 'react';
import { APMService, punish } from '../main';
export default class WelcomePage extends React.Component<any, any> {

  constructor(props: any, state: any) {
    super(props, state);
  }

  componentWillMount() {
    APMService.getInstance().startTransaction('WelcomePage');
    punish();
  }

  componentDidMount() {
    APMService.getInstance().endTransaction(true);
  }

  componentWillUnmount() {
    APMService.getInstance().endTransaction(false);
  }

  render() {
    return (
      <span>
        <h2>Welcome</h2>
        <div className='row'>
          <div className='col-md-12'>
            <img className='img-responsive' src='/images/pets.png' />
          </div>
        </div>
      </span>
    );
  }

}
