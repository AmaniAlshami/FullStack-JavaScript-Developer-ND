# Image Processing API

## Introduction

a small project contains one API that used to resize image into given width and height. 

## Getting Started

This project depends on Nodejs and Node Package Manager (NPM) ensure you already intall it from https://nodejs.com/en/download. NPM Relies on the package.json file located in the frontend directory of this repository. To install NPM run `
npm install` on terminal.

```
npm start
```
## Dependencies 

- Express : to develop api 
- Jasmine & supertest : For testing 
- Sharp : For image Processing 
- 

## API Reference

### Endpoints

**GET /imgae 

Description: 
Return image in default size if only provide the file name, to resize image provide width and hight.

Request Parameters :
- Filename : the name of image that already stored in image folder
- Width 
- hight

Example cURL : 
```
curl --location --request GET 'http://localhost:3200/image?filename=default&width=100&height=100'
```

### Tests

Run 
```
npm run test
```

