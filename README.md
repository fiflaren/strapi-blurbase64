# Strapi plugin strapi-blurbase64

### This is a fork of https://github.com/emil-petras/strapi-blurhash, thanks to Emil Petraš, the author of the original package, for their work


A plugin for <a href="https://github.com/strapi/strapi">Strapi CMS</a> that generates blur base 64 for your uploaded images

## Installation

To install, run:

```bash
npm install strapi-blurbase64
```

Open/create file `config/plugins.js`. Enable this plugin by adding:

```js
module.exports = {
    ...
    'strapi-blurbase64': {
      enabled: true,
      config: {
        regenerateOnUpdate: true
      }
    },
  }
```

## How to generate blurbase64 for an image

In the Strapi Dashboard open Content Manager. Edit one collection/single type. Add or edit a Media field type and save the collection/single type.

## How to get blurbase64

Target a Strapi REST API endpoint. For example:

```
localhost:1337/api/products?populate=Image.*
```

The response will be a JSON containing blurbase64 along with rest of the image data:

```js
{
  "data": [
    {
      "id": 6,
      "attributes": {
        "name": "Test",
        "createdAt": "2022-10-27T14:52:04.393Z",
        "updatedAt": "2022-10-28T09:58:22.238Z",
        "Image": {
          "data": {
            "id": 80,
            "attributes": {
              "name": "image.png",
              "alternativeText": "image.png",
              "caption": "image.png",
              "width": 960,
              "height": 168,
              "formats": {
                ...
              },
              "hash": "image_ed1fbcdba0",
              "ext": ".png",
              "mime": "image/png",
              "size": 4.63,
              "url": "/uploads/image_ed1fbcdba0.png",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2022-10-28T09:42:02.471Z",
              "updatedAt": "2022-10-28T09:42:02.471Z",
              "blurbase64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..."
            }
          }
        }
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```