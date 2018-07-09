import { StoreTodoModule } from './store-todo.module';

describe('StoreTodoModule', () => {
  let storeTodoModule: StoreTodoModule;

  beforeEach(() => {
    storeTodoModule = new StoreTodoModule();
  });

  it('should create an instance', () => {
    expect(storeTodoModule).toBeTruthy();
  });
});
