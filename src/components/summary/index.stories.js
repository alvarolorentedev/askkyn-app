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
  subscribeChanges: (_, cb) => 
    cb({
      doc:{
        questions: [{
          question: "is this question really awesome?",
          answers: [{
            value: "Yes, is great",
            votes: ["Alvaro", "Pepe", "Pedro"]
          },{
            value: "No, is crap",
            votes: ["John"]
          },]
        },{
          question: "is this other question really awesome?",
          answers: [{
            value: "Yes, is great",
            votes: ["Alvaro", "Pedro"]
          },{
            value: "Yes, of course it is",
            votes: ["Pepe"]
          },{
            value: "No, is crap",
            votes: ["John"]
          },]
        }],
        active: null
      }
    }),
  activateQuestion: () => console.log("activate question"),
};