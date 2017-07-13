import { ProjetoFinalPage } from './app.po';

describe('projeto-final App', () => {
  let page: ProjetoFinalPage;

  beforeEach(() => {
    page = new ProjetoFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
