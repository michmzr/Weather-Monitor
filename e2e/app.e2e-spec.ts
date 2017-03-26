import { WeatherMonitorPage } from './app.po';

describe('weather-monitor App', () => {
  let page: WeatherMonitorPage;

  beforeEach(() => {
    page = new WeatherMonitorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
