import { CoreDataModule } from './core-data.module';

describe('CoreDataModule', () => {
  let coreDataModule: CoreDataModule;

  beforeEach(() => {
    coreDataModule = new CoreDataModule();
  });

  it('should create an instance', () => {
    expect(coreDataModule).toBeTruthy();
  });
});
