const http = require("http");
const fs = require("fs");
const puppeteer = require("puppeteer");
const { assert } = require("console");

let server;
let browser;
let page;

beforeAll(async () => {
  server = http.createServer(function (req, res) {
    fs.readFile(__dirname + "/.." + req.url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  });

  server.listen(process.env.PORT || 3000);
});

afterAll(() => {
  server.close();
});

beforeEach(async () => {
  browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  page = await browser.newPage();
  await page.goto("http://localhost:3000/index.html");
});

afterEach(async () => {
  await browser.close();
});

describe('the index.js file', () => {
  it('should create a class named `Agable` that takes a year and has an `age` method that calculates the age', async function () {
      const age = await page.evaluate(() => {
        let agable = new Agable(2000);
        return agable.age();
      });

      let currentYear = new Date().getFullYear();

      expect(age).toBe(currentYear - 2000);
  });

  it('should inherit from `Agable` in `Company` class and pass `yearEstablished` to `Agable` in the constructor', async function () {
      const isInstanceOfAgable = await page.evaluate(() => {
        let company = new Company('testName', 'testId', 2021, 1.23);
        return company instanceof Agable;
      });

      const age = await page.evaluate(() => {
        let company = new Company('testName', 'testId', 2021, 1.23);
        return company.age();
      });

      let currentYear = new Date().getFullYear();

      expect(isInstanceOfAgable).toBe(true);
      expect(age).toBe(currentYear - 2021);
  });

  it('should inherit from `Agable` in `Person` class and pass `birthYear` to `Agable` in the constructor', async function () {
      const isInstanceOfAgable = await page.evaluate(() => {
        let person = new Person('testName', 'testId', 2021, 1.23);
        return person instanceof Agable;
      });

      const age = await page.evaluate(() => {
        let person = new Person('testName', 'testId', 2021, 1.23);
        return person.age();
      });

      let currentYear = new Date().getFullYear();

      expect(isInstanceOfAgable).toBe(true);
      expect(age).toBe(currentYear - 2021);
  });

  it('should inherit from `Agable` in `Car` class and pass `year` to `Agable` in the constructor', async function () {
      const isInstanceOfAgable = await page.evaluate(() => {
        let car = new Car('testName', 'testVin', 2021);
        return car instanceof Agable;
      });

      const age = await page.evaluate(() => {
        let car = new Car('testName', 'testVin', 2021);
        return car.age();
      });

      let currentYear = new Date().getFullYear();

      expect(isInstanceOfAgable).toBe(true);
      expect(age).toBe(currentYear - 2021);
  });
});

