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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          img={img}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {github}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {deployedlink}
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