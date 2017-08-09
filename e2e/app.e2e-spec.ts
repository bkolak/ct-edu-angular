import { CtEduAngularPage } from './app.po';

describe('ct-edu-angular App', () => {
  let page: CtEduAngularPage;

  beforeEach(() => {
    page = new CtEduAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
