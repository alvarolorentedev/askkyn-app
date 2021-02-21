import React from 'react';

import { Summary } from './index';

export default {
  title: 'Summary/summary',
  component: Summary,
};

const Template = (args) => <Summary {...args} />;

export const defaultView = Template.bind({});
defaultView.args = {
  finishedLoading: ()=> console.log("finish loading"),
};
