import React from 'react';

import { Answers } from './index';

export default {
  title: 'Answers/answers',
  component: Answers,
};

const Template = (args) => <Answers {...args} />;

export const defaultView = Template.bind({});
defaultView.args = {
  finishedLoading: ()=> console.log("finish loading"),
};
