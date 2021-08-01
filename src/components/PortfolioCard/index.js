// import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Card from '@material-ui/core/Card';
// // import CardActionArea from '@material-ui/core/CardActionArea';
// // import CardContent from '@material-ui/core/CardContent';
// // import CardMedia from '@material-ui/core/CardMedia';
// // import Typography from '@material-ui/core/Typography';
// // import './style.css'


// // const useStyles = makeStyles({
// //   root: {
// //     maxWidth: 345,
// //   },
// //   media: {
// //     height: 350,
// //   },
// // });
// // const PortfolioCard = ({ name, github, deployedlink, tools, img}) => {
// //   const classes = useStyles();
// //   return (
// //     <Card class="content-container" className={classes.root}>
// //       <CardActionArea >
// //         <CardMedia
// //           className={classes.media}
// //           image={img}
// //           title={name}
// //         />
// //         <CardContent>
// //           <Typography gutterBottom variant="h5" component="h2">
// //             {name}
// //           </Typography>
// //           <Typography variant="body2" color="textSecondary" component="p">
// //           <a href= {github}>Github</a>
// //           </Typography>
// //           <Typography variant="body2" color="textSecondary" component="p">
// //           <a href= {deployedlink}>Deployed link</a>
// //           </Typography>
// //           <Typography variant="body2" color="textSecondary" component="p">
// //             {tools}
// //           </Typography>
// //         </CardContent>
// //       </CardActionArea>
// //     </Card>
// //   );
// // }

// // export default PortfolioCard

// import projects from '../../projects.json'
// // import image from {img}


// export default function PortfolioCard({ name, github, deployedlink, tools, source , role}) {



//   return (
//     <div >
//       {projects.map(project=> {
//         return (
//           <div class="card">
//           <h4 class="card__heading">
//             <span class="card__heading-span card__heading-span--1">{project.name}</span>
//           </h4>
//           <div class="card__details">
//             <ul>
//               <li><a className='link' href= {project.github}>Github</a></li>
//               <li><a className='link' href= {project.deployedlink}>Deployed link</a></li>
//               <li>{project.tools}</li>
//               <li>{project.role}</li>
//               {/* <li><img src={require(`../../assets/images/${name}.png`)}/></li> */}
//               <li>    <div
//       className='image'
//       style={{
//         backgroundImage: `url(${project.source})`
//       }}
//     /></li>
//             </ul>
//           </div>
//       </div>
//         )
//       })

// }
//     </div>
//   );

import image from '../../assets/images/book search.png'
export default function PortfolioCard({ name, github, deployedlink, tools, source , role}) {

  return (
    <div >
          <div class="card">
          <h4 class="card__heading">
            <span class="card__heading-span card__heading-span--1">{name}</span>
          </h4>
          <div class="card__details">
            <ul>
              <li><a className='link' href= {github}>Github</a></li>
              <li><a className='link' href= {deployedlink}>Deployed link</a></li>
              <li>{tools}</li>
              <li>{role}</li>
              <li><img className='image'src={image}/></li>
            </ul>
          </div>
      </div>
    </div>
  );
}

