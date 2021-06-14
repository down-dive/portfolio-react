import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
});
const PortfolioCard = ({ name, github, deployedlink, tools, img}) => {
  const classes = useStyles();
  return (
    <Card class="container" className={classes.root}>
      <CardActionArea class="content-container">
        <CardMedia
          className={classes.media}
          image={img}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href= {github}>Github</a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href= {deployedlink}>Deployed link</a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tools}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PortfolioCard