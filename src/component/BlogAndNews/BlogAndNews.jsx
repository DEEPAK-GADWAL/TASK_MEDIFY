import React, { useState, useEffect } from "react";
import styles from "./BlogAndNews.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import blogAndNews from "../../assets/images/blogAndNews.png";

const BlogAndNews = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    setCurrentDate(today.toLocaleDateString('en-US', options));
  }, []);

  return (
    <div className="mainContainer">
      <div className="container">
        <div className={styles.mainHead}>
          <h5>Blog & News</h5>
          <h1>Read Our Latest News</h1>
        </div>
        <div className={styles.cardItem}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={blogAndNews}
                alt="green iguana"
                sx={{ objectFit: 'cover', objectPosition: 'inherit' }} 
              />
              <CardContent>
                <Typography>
                  <span>Medical</span>
                  <Box component="span" sx={{ borderLeft: 1, pl: 2, ml: 2 }} className="date-paragraph">
                    {currentDate}
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  6 Tips to Protect Your Mental Health When You are Sick
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={blogAndNews}
                alt="green iguana"
                sx={{ objectFit: 'cover', objectPosition: 'inherit' }} 
              />
              <CardContent>
                <Typography>
                  <span>Medical</span>
                  <Box component="span" sx={{ borderLeft: 1, pl: 2, ml: 2 }} className="date-paragraph">
                    {currentDate}
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  6 Tips to Protect Your Mental Health When You are Sick
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={blogAndNews}
                alt="green iguana"
                sx={{ objectFit: 'cover', objectPosition: 'inherit' }} 
              />
              <CardContent>
                <Typography>
                  <span>Medical</span>
                  <Box component="span" sx={{ borderLeft: 1, pl: 2, ml: 2 }} className="date-paragraph">
                    {currentDate}
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  6 Tips to Protect Your Mental Health When You are Sick
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BlogAndNews;
