import * as React from 'react'
import { Summary } from './index'
import { mount } from 'enzyme'

describe('Answers page', () => {

    const finishedLoadingMock = jest.fn();
    const subscribeChangesMock = jest.fn();
    
    it('Has correct messages and called finish loading', async () => {
      const finishedLoadingMock = jest.fn();
      const wrapper = mount(<Summary finishedLoading={finishedLoadingMock} subscribeChanges={subscribeChangesMock}/>)
      expect(finishedLoadingMock).toHaveBeenCalled()
    })
})

