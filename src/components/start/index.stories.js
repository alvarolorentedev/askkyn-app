import React from 'react';
import { Start } from './index';
import * as faker from 'faker'

export default {
  title: 'Start/start',
  component: Start,
};

const Template = (args) => <Start {...args} />;

const finishedLoading = () => console.log("finish loading")
const navigate = console.log
const create = () => ({ success : true, identifier: faker.random.uuid() })
const join = () => ({ success : true })

export const defaultView = Template.bind({});
defaultView.args = {
  finishedLoading, navigate, finishedLoading, create, join
};
