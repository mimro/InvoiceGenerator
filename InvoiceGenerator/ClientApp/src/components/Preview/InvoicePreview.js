import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Template1 from './InvoiceViewTemplates/Template1';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #66a3ff',
    boxShadow: theme.shadows[5],
	overflow:'scroll',
    padding: theme.spacing(2, 4, 3),
	top:'5%',
	left:'25%'
  },
}));

  function InvoicePreview(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const invoiceData={
		invoiceSpecificData: props.invoiceSpecificData,
		issuerDetails: props.issuerDetails,
		recipientDetails: props.recipientDetails,
		invoiceTableDetails: props.invoiceTableDetails,
  }

  return (
    <div  className={classes.paper}>
        <Template1 invoiceData={invoiceData} />

    </div>
  );
}

const mapStateToProps = (state , ownProps) => {
  return {
    invoiceSpecificData: state.invoiceSpecificData,
	issuerDetails: state.issuerDetails,
	recipientDetails: state.recipientDetails,
	invoiceTableDetails: state.invoiceTableDetails,
  }
}


export default connect(
  mapStateToProps
)(InvoicePreview)

