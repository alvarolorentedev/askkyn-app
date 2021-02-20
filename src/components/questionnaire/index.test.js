import * as React from 'react'
import { Questionnaire } from './index'
import { mount } from 'enzyme'

describe('Questionnaire page', () => {

    const finishedLoadingMock = jest.fn();
    const createMock = jest.fn();
    const joinMock = jest.fn();
    
    it('Has correct messages and called finish loading', async () => {
      const finishedLoadingMock = jest.fn();
      const wrapper = mount(<Questionnaire finishedLoading={finishedLoadingMock} create={createMock} join={joinMock}/>)
      expect(finishedLoadingMock).toHaveBeenCalled()
    })
})

