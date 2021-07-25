import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import './style.css'


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 350,
//   },
// });
// const PortfolioCard = ({ name, github, deployedlink, tools, img}) => {
//   const classes = useStyles();
//   return (
//     <Card class="content-container" className={classes.root}>
//       <CardActionArea >
//         <CardMedia
//           className={classes.media}
//           image={img}
//           title={name}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {name}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//           <a href= {github}>Github</a>
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//           <a href= {deployedlink}>Deployed link</a>
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {tools}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

// export default PortfolioCard

export default function PortfolioCard({ name, github, deployedlink, tools, img }) {
  return (
    <div class="col-1-of-3">
        <div class="card">
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--1">{name}</span>
            </h4>
            <div class="card__details">
              <ul>
                <li><a className='link' href= {github}>Github</a></li>
                <li><a className='link' href= {deployedlink}>Deployed link</a></li>
                <li>{tools}</li>
              </ul>
            </div>
        </div>
    </div>
  );
}