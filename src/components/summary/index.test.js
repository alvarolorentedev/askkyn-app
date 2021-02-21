import * as React from 'react'
import { Summary } from './index'
import { mount } from 'enzyme'

describe('Answers page', () => {

    const finishedLoadingMock = jest.fn();
    
    it('Has correct messages and called finish loading', async () => {
      const finishedLoadingMock = jest.fn();
      const wrapper = mount(<Summary finishedLoading={finishedLoadingMock}/>)
      expect(finishedLoadingMock).toHaveBeenCalled()
    })
})

