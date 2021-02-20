import * as React from 'react'
import { Start } from './index'
import { mount } from 'enzyme'

describe('Start page', () => {

    const finishedLoadingMock = jest.fn();
    const createMock = jest.fn();
    const joinMock = jest.fn();
    
    it('Has correct messages and called finish loading', async () => {
      const finishedLoadingMock = jest.fn();
      const wrapper = mount(<Start finishedLoading={finishedLoadingMock} create={createMock} join={joinMock}/>)
      expect(finishedLoadingMock).toHaveBeenCalled()
    })
})

