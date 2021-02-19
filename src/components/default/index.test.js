import * as React from 'react'
import { Default } from './index'
import { mount } from 'enzyme'

describe('default page', () => {

    const finishedLoadingMock = jest.fn();
    const createMock = jest.fn();
    const joinMock = jest.fn();
    
    it('Has correct messages and called finish loading', async () => {
      const finishedLoadingMock = jest.fn();
      const wrapper = mount(<Default finishedLoading={finishedLoadingMock} create={createMock} join={joinMock}/>)
      expect(finishedLoadingMock).toHaveBeenCalled()
    })
})

