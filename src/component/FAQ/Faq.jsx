import React, { useState, useEffect } from "react";
import styles from "./Faq.module.css";
import { Card, CardContent, CardMedia, Typography, Box, Container, Grid, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import blogImg from "../../assets/images/blogImg.png";
import AccordionIndicator from "../../component/Accordion/Accordion";

const Faq = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    setCurrentDate(today.toLocaleDateString('en-US', options));
  }, []);

  return (
    <Container maxWidth="lg" className={styles.mainContainer}>
        <Typography  sx={{display:"flex" ,flexDirection:"column",alignItems:"center"}}variant="h6" color="primary" className={styles.sectionTitle}>

            Get Your Answer
          </Typography>
          <Typography sx={{display:"flex" ,flexDirection:"column",alignItems:"center"}} variant="h4" className={styles.mainTitle}>
            Frequently Asked Questions
          </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} className={styles.imageContainer}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={blogImg}
              alt="FAQ Image"
              className={styles.cardImg}
            />
            <CardContent className={styles.overlayText}>
              <Typography variant="h6" className={styles.overlayTextContent}>
                <span role="img" aria-label="smile">😊</span> 84k+ Happy Patients
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        
          <AccordionIndicator />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Faq;
