import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Button } from '@mui/joy';
import { Link } from 'react-router-dom';

export default function GardenCategoryCard({ category, image, link, subtitle }) {
  return (
    <Card sx={{ minHeight: '280px', width: '100%', margin: '20px', display: 'flex', flexDirection: 'column' }}>
      <CardCover>
        <img
          src={`${process.env.PUBLIC_URL}/${image}`}
          srcSet={`${process.env.PUBLIC_URL}/${image} 2x`}
          loading="lazy"
          alt={category}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </CardCover>
      <CardCover sx={{
        background:
          'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      />
      <CardContent sx={{ justifyContent: 'flex-end', color: '#fff', flex: 1 }}>
        {/* All elements within CardContent now inherit white color */}
        <Typography level="title-lg" sx={{ color: '#fff' }}>
          {category}
        </Typography>
        <Typography sx={{ color: '#fff' }}>{subtitle}</Typography>
        <Link to={link}>
          <Button
            variant="solid"
            color="primary"
            sx={{ marginTop: '1em', borderRadius: '20px', backgroundColor: 'darkgreen', width: 200 }}
          >
            Shop Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
