import {makeStyles} from '@material-ui/core/styles';
const font =  "'Texturina', serif";


const useStyles = makeStyles((theme) => ({
    parentFragment: {
      //backgroundColor: theme.palette.background.paper,
      background: 'linear-gradient(-180deg,#011d3e 34%,#94bbe9 100%,#EDF2FB 100%)',
      color:"#e9e9e9",

    
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    toolbar: {
    
    },
    features: {
      
      //backgroundColor:"#EDF2FB",
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
      paddingTop: theme.spacing(10),
      paddingBottom:theme.spacing(10),
        
    },
    features_title:{
      paddingTop:theme.spacing(1),
      paddingBottom:theme.spacing(1),
    },
    features_icon:{

    },
    features_text:{

    },
    square: {
      color: "blue",
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    main_page:{
      //backgroundColor: theme.palette.background.paper,
      paddingTop:theme.spacing(5),
    },
    appToolbar: {
      minHeight:90,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    margin: {
      marginTop: theme.spacing(4),
      marginBottom:theme.spacing(4),
    },
    button: {
      '&:hover':{
        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
        
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
        color: 'white',
        border:0,
      }
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: "#edf2fb",
      '&': {
        height: "wrap-content",
        margin:"auto",
        padding:theme.spacing(4),
        borderRadius:20,
        borderColor:"cyan",
        borderStyle: 'solid',
        border:2,
        boxShadow: '6px 7px 10px 6px rgba(33, 203, 243, .30)',
      },
      '&:hover':{
          borderStyle: 'dotted',
          borderColor:""
      }
    },
    
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color:"#e9e9e9",
    },
    footer: {
        //backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(10),
    },
    imageCarousel: {
      //backgroundColor: theme.palette.background.paper,
    },
    fontWhite : {
      color:"#e9e9e9",
    },
    appbar:{
      background:"#011d3e",
      flexGrow: 1,

    }
}));

export default useStyles;