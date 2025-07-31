## Hudl Test Framework

### Installation

1. Download and install the latest version of node to your local system

https://nodejs.org/en/download

2. Clone the repository

3. Change directory to the repository:
```
cd hudl-test-framework
```

Then install dependencies by running the following command below:

```
npm i
```

### Run tests

Before running the tests, we need to load a config file containing environment variables, username and password.

In order to do this, we must first create a **.env.prod** file at the root of this repo with the correct environment variables, otherwise the tests will fail

1. Create a **.env.prod** file at the root of this repository

Inside the **.env.prod** file, add the following environment variables:

```
ENV='prod'
BASE_URL='https://www.hudl.com/en_gb/'
HUDL_USERNAME=...
HUDL_PASSWORD=...
```

For security purposes the values of **HUDL_USERNAME** and **HUDL_PASSWORD** are not commited to the repostory. In order to get the username and password they can be found on the email.

Once you have created a **.env.prod** file at the root of this repository with the environment variables and values you can now run the following command to run the tests:

```
npm run e2e:prod
```


### Other notes:

VSCode will highlight the line of code on **line 5** in **playwright.config.ts** as a problem but it is wrong because the environment variable "ENV" is set in the **e2e** npm script: 

```
if (!process.env.ENV) throw new Error(`The "ENV" environment variable is not defined. Please set ENV in the npm script. E.g. cross-env ENV='prod'`);
```

VSCode is incorrect as the tests run fine when you run the command:

```
npm run e2e:prod
```
