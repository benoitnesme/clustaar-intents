import { IntentsManager.MaterialModule } from './intents.manager.material.module';

describe('Intent.MaterialModule', () => {
  let intentMaterialModule: IntentsManager.MaterialModule;

  beforeEach(() => {
    intentMaterialModule = new IntentsManager.MaterialModule();
  });

  it('should create an instance', () => {
    expect(intentMaterialModule).toBeTruthy();
  });
});
