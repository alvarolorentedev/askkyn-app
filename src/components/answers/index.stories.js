import React from 'react';

import { Answers } from './index';

export default {
  title: 'Answers/answers',
  component: Answers,
};

const Template = (args) => <Answers {...args} />;

export const emptyView = Template.bind({});
emptyView.args = {
  finishedLoading: ()=> console.log("finish loading"),
  subscribeChanges: () => console.log("subscribe"),
  answerQuestion: () => console.log("answer question"),
};

export const fullView = Template.bind({});
fullView.args = {
  finishedLoading: ()=> console.log("finish loading"),
  subscribeChanges: (_, cb) => 
    cb({
      doc:{
        questions: [{
          question: "is this question really awesome?",
          answers: [{
            value: "Yes, is great",
            votes: []
          },{
            value: "No, is crap",
            votes: []
          },]
        }],
        active: 0
      }
    }),
  answerQuestion: () => console.log("answer question"),
};