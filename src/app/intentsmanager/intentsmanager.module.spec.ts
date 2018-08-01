import { IntentsModule } from './intentsmanager.module';

describe('IntentModule', () => {
  let intentModule: IntentModule;

  beforeEach(() => {
    intentModule = new IntentModule();
  });

  it('should create an instance', () => {
    expect(intentModule).toBeTruthy();
  });
});
