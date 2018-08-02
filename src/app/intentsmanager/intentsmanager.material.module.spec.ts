import { IntentsManagerMaterialModule } from './intentsmanager.material.module';

describe('IntentsManagerMaterialModule', () => {
  let intentsManagerMaterialModule: IntentsManagerMaterialModule;

  beforeEach(() => {
    intentsManagerMaterialModule = new IntentsManagerMaterialModule();
  });

  it('should create an instance', () => {
    expect(intentsManagerMaterialModule).toBeTruthy();
  });
});
