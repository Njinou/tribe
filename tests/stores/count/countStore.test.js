import useCounterStore from '../../../src/stores/count/countStore';

describe('Counter Store', () => {
  beforeEach(() => {
    useCounterStore.getState().reset();  // Reset the state before each test
  });

  it('should initialize with count as 0', () => {
    const { count } = useCounterStore.getState();
    expect(count).toBe(0);  // Initial state check
  });

  it('should increment the count by 1', () => {
    useCounterStore.getState().increment();
    const { count } = useCounterStore.getState();
    expect(count).toBe(1);  // Increment check
  });

  it('should decrement the count by 1', () => {
    useCounterStore.getState().increment();  // First increment to 1
    useCounterStore.getState().decrement();  // Then decrement back to 0
    const { count } = useCounterStore.getState();
    expect(count).toBe(0);  // Decrement check
  });

  it('should reset the count to 0', () => {
    useCounterStore.getState().increment();  // First increment to 1
    useCounterStore.getState().reset();  // Then reset back to 0
    const { count } = useCounterStore.getState();
    expect(count).toBe(0);  // Reset check
  });
});
