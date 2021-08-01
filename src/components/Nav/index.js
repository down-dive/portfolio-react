import React from 'react';

export default function Nav() {
  // const {
  //   categories = [],
  //   contactSelected,
  //   setContactSelected
  // } = props;

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>

      <label for="navi-toggle" class="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="mx-2" className="navigation__item"><a href="#about" className="navigation__link" >
            About me
          </a></li>
          <li className="navigation__item"><a href="#contact" className="navigation__link"><span>02</span>Contact</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Portfolio</a></li>
          <li className="navigation__item"><a href="#resume" className="navigation__link"><span>04</span>Resume</a></li>
        </ul>
      </nav>

    </div>

  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function Nav(props) {
//   const classes = useStyles();
//   const {
//     categories = [],
//     contactSelected,
//     setContactSelected
//   } = props;

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//           Yevgeniya Terlyuk
//           </Typography>
//           <ul className="flex-row">
//                     <li className="mx-2">
//                         <a href="#about" onClick={() => setContactSelected(false)}>
//                             About me
//             </a>
//                     </li>
//                     <li className="mx-2">
//                         <a href="#contact" onClick={() => setContactSelected(true)}>
//                             Contact
//             </a>
//                     </li>
//                     <li className="mx-2">
//                         <a href="#portfolio" onClick={() => setContactSelected(false)}>
//                             Portfolio
//             </a>
//                     </li>
//                     <li className="mx-2">
//                         <a href="#resume" onClick={() => setContactSelected(false)}>
//                             Resume
//             </a>
//                     </li>

//                 </ul>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
