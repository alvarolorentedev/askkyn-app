import React from 'react';

import { Questionnaire } from './index';

export default {
  title: 'Questionnaire/questionnaire',
  component: Questionnaire,
};

const Template = (args) => <Questionnaire {...args} />;

export const defaultView = Template.bind({});
defaultView.args = {
  finishedLoading: ()=> console.log("finish loading"),
};
