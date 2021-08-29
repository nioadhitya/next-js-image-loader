# Getting Started with NextJs Image Loader

In the project directory, you can run:

```bash
  yarn add next-js-image-loader
```

# How To use

###  Required params: 

Attempt | type 
--- | --- 
src | String 
width | Number 
imageKey | String
salt | String
hostImage | string  


### Code Example

```bash
  import { loaderImage } from 'next-js-image-loader'

  function renderImage () {
    return (
      <>
        <Image 
          loader={loaderImage}
          src="https://storage.googleapis.com/cms-general-assets/logo/cms-media-idn-times.png"
          width={100}
          height={100}
          imageKey="sadjlkasjkdjalksjdk"
          salt="asdkjklsajdklajskl"
          hostImage="https://imgproxy.arcana.my.id"
        />
      </>      
    )
  }
```