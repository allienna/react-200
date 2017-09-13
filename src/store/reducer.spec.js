import reducer, * as select from './reducer';

describe('rootReducer', () => {
  it('should return the expected structure', () => {
    const actualState = reducer(undefined, {});
    expect(actualState).toEqual({
      people: expect.anything(),
      search: expect.anything(),
      discover: expect.anything()
    });
  });
});

describe('selectors', () => {
  const state = {
    people: {
      map: {
        '1': { id: '1', firstname: 'John' },
        '2': { id: '2', firstname: 'Jane' }
      },
      all: ['1', '2']
    },
    search: 'oh',
    discover: 2
  }
  
  test('getPersonById', () => {
    expect(select.getPersonById(state, '1')).toEqual({ id: '1', firstname: 'John' })
  });

  test('getPersonCount', () => {
    expect(select.getPersonCount(state)).toEqual(2);
  });

  test('getSearch', () => {
    expect(select.getSearch(state)).toEqual('oh');
  });

  test('getFilteredPersonIds', () => {
    expect(select.getFilteredPersonIds(state)).toEqual(['1']);
  });

  test('getCurrentDiscoverId', () => {
    expect(select.getCurrentDiscoverId(state)).toEqual('2');
  });
});