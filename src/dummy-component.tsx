import { Button } from 'antd';
import { css } from '@pigment-css/react';

export type DummyComponentProps = {};
const className = css({ color: 'orange' });

export const DummyComponent: React.FC<DummyComponentProps> = () => (
  <div className={className}>
    <p> This is some text </p>
    <Button>I'm a button</Button>
  </div>
);
