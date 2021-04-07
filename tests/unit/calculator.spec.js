import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  });

  it('add changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick(4);
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick(1);
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(5);
  });


  it('substract changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick(7);
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick(4);
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(3);
  });

  it('multiply changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick(3);
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick(5);
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(15);
  });

  it('divide changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick(2);
    wrapper.vm.numberClick(1);
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick(7);
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(3);
  });

  it('concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick(1);
    wrapper.vm.numberClick(2);
    wrapper.vm.numberClick(3);
    wrapper.vm.numberClick(4);
    wrapper.vm.numberClick(5);
    expect(wrapper.vm.runningTotal).to.equal(12345);
  });

  it('chain multiple operators together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick(2);
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick(2);
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick(1);
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick(3);
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick(6);
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(0);
  });

  it('clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick(2);
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick(3);
    wrapper.vm.clearClick();
    wrapper.vm.numberClick(8);
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(10);
  });

})
