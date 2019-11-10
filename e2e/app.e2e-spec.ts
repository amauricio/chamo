import { Angular8SeedPage } from './app.po';

describe('angular-8-seed App', function() {
  let page: Angular8SeedPage;

  beforeEach(() => {
    page = new Angular8SeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
