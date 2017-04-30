import { Ang2DemoPage } from './app.po';

describe('ang2-demo App', () => {
  let page: Ang2DemoPage;

  beforeEach(() => {
    page = new Ang2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
