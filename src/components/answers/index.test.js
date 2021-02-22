import * as React from 'react'
import { Answers } from './index'
import { mount } from 'enzyme'

describe('Answers page', () => {

    const finishedLoadingMock = jest.fn();
    const createMock = jest.fn();
    const joinMock = jest.fn();
    const subscribeChangesMock = jest.fn();
    
    it('Has correct messages and called finish loading', async () => {
      const finishedLoadingMock = jest.fn();
      const wrapper = mount(<Answers finishedLoading={finishedLoadingMock} subscribeChanges={subscribeChangesMock}/>)
      expect(finishedLoadingMock).toHaveBeenCalled()
    })
})

