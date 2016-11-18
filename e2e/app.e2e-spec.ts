import { SocialtvPage } from './app.po';

describe('socialtv App', function() {
  let page: SocialtvPage;

  beforeEach(() => {
    page = new SocialtvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
