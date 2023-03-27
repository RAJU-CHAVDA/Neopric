import React, { useState } from 'react';
import { CarouselComponent, CarouselItemModel } from '@syncfusion/ej2-react-navigations';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 500,
      margin: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
    },
  }));

  function Carousel2() {
    const classes = useStyles();
    const [images, setImages] = useState<CarouselItemModel[]>([
        { imageUrl: 'https://cdn.syncfusion.com/content/images/react/ej2-react-carousel/01.jpg', header: 'Image 1', id: '1' },
        { imageUrl: 'https://cdn.syncfusion.com/content/images/react/ej2-react-carousel/02.jpg', header: 'Image 2', id: '2' },
        { imageUrl: 'https://cdn.syncfusion.com/content/images/react/ej2-react-carousel/03.jpg', header: 'Image 3', id: '3' },
        { imageUrl: 'https://cdn.syncfusion.com/content/images/react/ej2-react-carousel/04.jpg', header: 'Image 4', id: '4' },
        { imageUrl: 'https://cdn.syncfusion.com/content/images/react/ej2-react-carousel/05.jpg', header: 'Image 5', id: '5' },
      ]);
  
    const addImage = () => {
      const newImage: CarouselItemModel = { imageUrl: 'https://cdn.syncfusion.com/content/images/react/ej2-react-carousel/06.jpg', alt: 'Image 6' };
      setImages([...images, newImage]);
    };
  
    return (
      <div className={classes.root}>
        <Button variant="contained" color="primary" className={classes.button} onClick={addImage}>Add Image</Button>
        <CarouselComponent dataSource={images} showIndicators={true} />
      </div>
    );
  }

  export default Carousel2;